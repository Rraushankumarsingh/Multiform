import { Box, Card, CardContent, Typography } from "@mui/material";

const Summary = ({ state,setIsDisabled }) => {

  setIsDisabled(false)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "30px 90px",
        gap: "20px",
      }}
    >
      <Box>
        <Typography variant="h3">Finishing up</Typography>
        <Typography variant="h6" sx={{ fontSize: "16px  " }}>
          Double check everything looks OK before confirming
        </Typography>
      </Box>
      <Box>
        <Card sx={{ width: 500, height: "100%" }}>
          <CardContent>
            <Box sx={{ background: "#e7feff", padding: "20px" }}>
              <Box
                sx={{
                  paddingLeft: "10px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "20px", marginTop: "10px" }}
                  >
                    {state}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    change
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
                    +$9/mo
                  </Typography>
                </Box>
              </Box>
              <hr></hr>
              <Box
                sx={{
                  paddingLeft: "10px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "20px", marginTop: "20px" }}
                  >
                    Online Service
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
                  <Typography variant="h5" sx={{ fontSize: "20px" }}>
                    +$1/mo
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  paddingLeft: "10px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "20px", marginTop: "10px" }}
                  >
                    larger storage
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "20px", paddingRight: "10px" }}
                  >
                    +$2/mo
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                paddingLeft: "10px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "50px",
              }}
            >
              <Typography variant="h5" sx={{ fontSize: "20px" }}>
                Total (par months)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "30%",
                  paddingRight: "10px",
                }}
              >
                <Typography variant="h5" sx={{ fontSize: "20px" }}>
                  +$12/mo
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Summary;
