import React, { useState } from "react";
import arcadeLogo from "../assets/arcadeIcon.svg";
import Advanced from "../assets/icon-advanced.svg";
import Pro from "../assets/icon-pro.svg";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

const planData = [
  { id: 1, name: "Arcade", price: "$9/mo", logo: arcadeLogo },
  { id: 2, name: "Advanced", price: "$12/mo", logo: Advanced },
  { id: 3, name: "Pro", price: "$15/mo", logo: Pro },
];

const SelectPlan = ({selectedPlan,setSelectedPlan,setIsDisabled}) => {
  const [isYearly, setIsYearly] = useState(false);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan.id);
    setIsDisabled(false)
  };

  const handleBillingChange = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "30px 90px",
        gap: "60px",
      }}
    >
      <Box>
        <Typography variant="h3">Select your plan</Typography>
        <Typography variant="h5">
          You have the option of monthly and yearly billing
        </Typography>
      </Box>

      <Box sx={{ display: "flex", width: "700px", gap: "20px" }}>
        {planData.map((plan) => (
          <Card
            key={plan.id}
            sx={{
              width: "150px",
              height: "170px",
              cursor: "pointer",
              backgroundColor: selectedPlan === plan.id ? "lightblue" : "white",
            }}
            onClick={() => handlePlanSelect(plan)}
          >
            <CardContent>
              <Checkbox
                checked={selectedPlan === plan.id}
                sx={{
                  opacity: 0,
                  position: "absolute",
                  top: 2,
                  right: 2,
                }}
              />
              <img src={plan.logo} alt={`${plan.name} logo`} />
              <Typography sx={{ paddingTop: "50px" }} variant="body2">
                {plan.name}
                <br />
                {plan.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box>
        <Stack
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            background: "aliceblue",
          }}
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <Typography>Monthly</Typography>
          <Switch
            defaultChecked={!isYearly}
            onChange={handleBillingChange}
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography>Yearly</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default SelectPlan;
