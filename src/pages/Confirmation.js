import React from "react";
import thanks from "../assets/icon-thank-you.svg";
import { Box, Typography } from "@mui/material";
const Confirmation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "48px",
      }}
    >
      <img style={{ height: "150px" }} src={thanks} alt="thanks  logo" />
      <Typography variant="h3">Thank you!</Typography>
      <Typography sx={{ maxWidth: "500px" }}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please fell free to email us at
        support@loremgaming.com
      </Typography>
    </Box>
  );
};

export default Confirmation;
