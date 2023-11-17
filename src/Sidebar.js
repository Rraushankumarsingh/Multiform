
import React, { useEffect } from "react";
import {
  Button,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  styled,
} from "@mui/material";
import logo from "./assets/sidebarbg.svg";
import PersonalInfo from "./pages/PersonalInfo";
import AddOns from "./pages/AddOns";
import SelectPlan from "./pages/SelectPlan";
import Summary from "./pages/Summary";
import { Box } from "@mui/material";
import { useState } from "react";
import Confirmation from "./pages/Confirmation";


const SidebarBox = styled("div")({
  backgroundImage: `url(${logo})`,
  backgroundSize: "cover",
  height: "562px",
  width: "200px",
  paddingLeft: "30px",
  paddingTop: "10px",
});


const ButtonBox = styled("div")({
  paddingTop: "48px",
  maxWidth: "630px",
  display: "flex",
  justifyContent: "space-evenly",
});


const ButtonContainer = styled(Button)({
  background: "blue",
  color: "white",
  padding: "10px 20px",
  "&:hover": {
    background: "lightblue",
    color: "white",
  },
});


const steps = [
  {
    label: "Step 1",
    description: `YOUR INFO`,
  },
  {
    label: "Step 2",
    description: "SELECT PLAN",
  },
  {
    label: "Step 3",
    description: `ADD-ONS`,
  },
  {
    label: "Step 4",
    description: `SUMMARY`,
  },
];


const Sidebar = () => {

  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:""
  })

  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [state, setState] = useState(""); 
  const [ isDisabled, setIsDisabled] = useState(true);
  
  useEffect(() => {
    if (selectedPlan === 1) {
      setState("Arcade (monthly)");
    } else if (selectedPlan === 2) {
      setState("Advance (monthly)");
    } else if (selectedPlan === 3) {
      setState("Pro (monthly)");
    } else {
      setState("You have not selected any plan");
    }
  }, [selectedPlan]);


  const handleNext = () => {
 
    if (formData.name  && formData.phone && formData.phone ) {
      setIsDisabled(true)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
   
  };

  console.log(formData,isDisabled)
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailPattern.test(formData.email) ||formData.email === "");
  };
  


  const validatePhone = () => {
    const phonePattern = /^\d{10}$/;
    setPhoneError(!phonePattern.test(formData.phone) || formData.phone === "");
  };


  return (
    <>
    
      <SidebarBox>
        <Stepper activeStep={activeStep - 1} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </SidebarBox>

    
      <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
 
        {activeStep === 1 ? (
          <PersonalInfo
          formData={formData}
          setFormData={setFormData}
            emailError={emailError}
            phoneError={phoneError}
            validateEmail={validateEmail}
            validatePhone={validatePhone}
            setIsDisabled={setIsDisabled}
            isDisabled ={isDisabled}
          />
        ) : activeStep === 2 ? (
          <SelectPlan
           isDisabled ={isDisabled}
           setIsDisabled={setIsDisabled}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        ) : activeStep === 3 ? (
          <AddOns setIsDisabled={setIsDisabled}/>
        ) : activeStep === 4 ? (
          <Summary state={state} setIsDisabled={setIsDisabled} />
        ) : activeStep === 5 ? (
          <Confirmation  setIsDisabled={setIsDisabled}/>
        ) : (
          ""
        )}

        <ButtonBox>
         
          {activeStep > 1 && activeStep < 5 && (
            <ButtonContainer onClick={handleBack}>Go Back</ButtonContainer>
          )}

          {activeStep < 5 && (
            <ButtonContainer onClick={handleNext} disabled={isDisabled}>
              Next
            </ButtonContainer>
          )}
        </ButtonBox>
      </Box>
    </>
  );
};

export default Sidebar;
