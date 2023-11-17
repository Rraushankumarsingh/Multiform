import {
  Box,
  Checkbox,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const AddOnsCard = styled(Box)({
  display: "flex",
  alignItems: "center",
  paddingLeft: "10px",
  width: 500,
  height: "70px",
  marginTop: "20px",
  borderRadius: "5px",
  border: "1px solid darkblue",
});

const AddOns = ({setIsDisabled}) => {
   const handleClick =()=>{
   
      setIsDisabled(false)
   
   }





  return (
    <Box  sx={{
      display: "flex",
      flexDirection: "column",
      margin: "30px 90px",
      gap: "20px",
    }}
    >
      <Box>
        <Typography variant="h3">Pick add-on</Typography>
        <Typography variant="h5">
          Add-on help enhance your gaming experience.
        </Typography>
      </Box>
      <Box>
        <AddOnsCard>
          <Checkbox />
          <Box sx={{ paddingLeft: "10px", width: "100%" }}>
            <Typography variant="h5" sx={{ fontSize: "20px" }}>
              Online Service
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "16px" }}>
              Access to multiplayer games
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "30%",
              paddingRight: "10px",
            }}
          >
            <Typography variant="h5" sx={{ fontSize: "25px" }}>
              +$1/mo
            </Typography>
          </Box>
        </AddOnsCard>
        <AddOnsCard>
          <Checkbox />
          <Box sx={{ paddingLeft: "10px", width: "100%" }}>
            <Typography variant="h5" sx={{ fontSize: "20px" }}>
              Large storage
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "16px" }}>
              Extra 1TB of cloud save
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "30%",
              paddingRight: "10px",
            }}
          >
            <Typography variant="h5" sx={{ fontSize: "25px" }}>
              +$2/mo
            </Typography>
          </Box>
        </AddOnsCard>
        <AddOnsCard>
          <Checkbox onClick={handleClick}/>
          <Box sx={{ paddingLeft: "10px", width: "100%" }}>
            <Typography variant="h5" sx={{ fontSize: "20px" }}>
              Customizable Profile
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "16px" }}>
              Custom theme on your profile
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "30%",
              paddingRight: "10px",
            }}
          >
            <Typography variant="h5" sx={{ fontSize: "25px" }}>
              +$2/mo
            </Typography>
          </Box>
        </AddOnsCard>
      </Box>
    </Box>
  );
};

export default AddOns;
