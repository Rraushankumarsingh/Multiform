import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const PersonalInfo = ({
  formData,
  setFormData,
  emailError,
  phoneError,
  setIsDisabled,
  validateEmail,
  validatePhone,
 
}) => {

  const handleOnChange=(e)=>{
    
    const {name, value} = e.target
    setFormData({...formData,[name]:value})
   
    if(formData.name && formData.email && formData.phone){
     
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }
  }
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
        <Typography variant="h3">Personal Info</Typography>
        <Typography variant="h5" sx={{ color: "#bababa", fontSize: "20px" }}>
          Please provide your name, email address and phone number.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "466px",
          gap: "20px",
        }}
      >
        <TextField id="outlined-basic" label="Name" variant="outlined"  name="name"   value={formData.name}
           onChange={handleOnChange}
        />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          onBlur={validateEmail}
          error={emailError}
          helperText={emailError ? "Invalid email address" : ""}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          name="phone"
          value={formData.phone}
          onChange={handleOnChange}
          onBlur={validatePhone}
          error={phoneError}
          helperText={phoneError ? "Invalid phone number" : ""}
        />
      </Box>
    </Box>
  );
};

export default PersonalInfo;
