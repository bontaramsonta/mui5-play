import React from "react";
import { Typography, Box, useTheme, Stack } from "@mui/material";
import BgHeroImg from "./assets/bg_hero.png";
import DesktopLogo from "./assets/desktop_logo.png";
import MobileLogo from "./assets/mobile_logo.png";

function App() {
  const theme = useTheme();
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={"stretch"}
      sx={{ height: "100vh" }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "50%" },
          height: { xs: "50%", md: "100%" },
          overflow: "hidden",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
          src={BgHeroImg}
          alt="unsplash"
        />
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            top: "0",
            left: "0",
            width: "200px",
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            src={MobileLogo}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "150px",
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            src={DesktopLogo}
          />
        </Box>
      </Box>
      <Stack
        justifyContent={{ xs: "flex-end", md: "center" }}
        alignItems={"center"}
        sx={{
          flex: 1,
          background: theme.palette.grey[200],
          width: "100%",
          height: "100%",
          overflowY: "auto",
        }}
      >
        {/* LoginForm */}
        <Box
          sx={{
            margin: { xs: "0", md: "auto 0" },
            position: { xs: "fixed", md: "relative" },
            top: { xs: "50%", md: "0" },
            left: { xs: "50%", md: "0" },
            transform: { xs: "translate(-50%,-50%)", md: "none" },
            //dummy
            minWidth: "300px",
            maxWidth: "400px",
            background: "transparent",
          }}
        >
          <Typography
            sx={{ color: { xs: "white", md: "initial" }, fontSize: "20px" }}
          >
            Login Form
          </Typography>
          <Typography sx={{ color: { xs: "white", md: "initial" } }}>
            Welcome to Dose check! Log in below or create an account if you
            don't have one.
          </Typography>
          <Box
            sx={{
              background: "white",
              height: "500px",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          ></Box>
        </Box>
        {/* / LoginForm */}
        <Typography
          sx={{
            padding: "10px",
            fontSize: "14px",
            color: theme.palette.grey[700],
          }}
        >
          Dose check will not have any access to personal date that can identify
          patients enrolled in the applicaton, Manufactured by: MANUFACTURER
          Distributed by: DISTRIBUTOR
        </Typography>
      </Stack>
    </Stack>
  );
}

export default App;
