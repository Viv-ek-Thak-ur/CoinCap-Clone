import React from "react";
import CryptoTable from "./CryptoTable";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Grid,
  InputBase,
  Paper,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import Footer from "./Footer";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          transition: "background-color 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "#f5f5f5",
            cursor: "pointer",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          CoinCap Clone Landing Page
        </Typography>
        
      </Box>
      {/* Top Banner */}

      <Box
        sx={{
          background: "linear-gradient(to right, #f72585, #7209b7)",
          p: 1,
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          Introducing CoinCap PRO: Access our powerful API, Earn CoinCap Points,
          Stake MOR for up to 20% APR
        </Typography>
      </Box>

      {/* Sticky AppBar */}
      <AppBar position="sticky" color="inherit" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
          {/* left - Navigation Links */}
          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Button
              color="inherit"
              sx={{ fontWeight: 600, fontSize: 14, textTransform: "uppercase" }}
            >
              Coins
            </Button>
            <Button
              color="inherit"
              sx={{ fontWeight: 600, fontSize: 14, textTransform: "uppercase" }}
            >
              Exchanges
            </Button>
            <Button
              color="inherit"
              sx={{ fontWeight: 600, fontSize: 14, textTransform: "uppercase" }}
            >
              Contact Us
            </Button>
            <Button
              color="inherit"
              sx={{ fontWeight: 600, fontSize: 14, textTransform: "uppercase" }}
            >
              CoinCap PRO
            </Button>
          </Box>

          {/* centre - Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src="https://coincap.io/static/logos/black.svg"
              alt="CoinCap Logo"
              height="32"
            />
          </Box>

          {/* Right - Dropdowns and icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body2" sx={{ cursor: "pointer" }}>
              USD ▼
            </Typography>
            <Typography variant="body2" sx={{ cursor: "pointer" }}>
              English ▼
            </Typography>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: 200,
                px: 1,
                py: 0.5,
                boxShadow: "none",
                border: "1px solid #ccc",
                borderRadius: 20,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton type="submit" sx={{ p: 0.5 }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Market Summary Bar */}
      <Container
        maxWidth="lg"
        sx={{
          background: "linear-gradient(to right, #304cbd, #61b5d5)",
          color: "#ffffff",
          py: 3,
          height: "35vh",
          mt: 4,
          mb: 4,
          minWidth:"100vw",
          justifyItems:"center"
         
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 2, 
          mb: 6,
           }}>
          <Grid container spacing={6} justifyContent="center">
            {[
              { label: "MARKET CAP", value: "$3.32T" },
              { label: "EXCHANGE VOL", value: "$75.57B" },
              { label: "ASSETS", value: "2,343" },
              { label: "EXCHANGES", value: "83" },
              { label: "MARKETS", value: "9,212" },
              { label: "BTC DOM INDEX", value: "64.3%" },
            ].map((item) => (
              <Grid
                item
                key={item.label}
                xs={6}
                sm={4}
                md={2}
                textAlign="center"
                gap={0}
                
              >
                <Typography variant="body2" sx={{ opacity: 0.8 ,
                  fontSize:"1.2rem"
                }}>
                  {item.label}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 300 ,
                  fontSize:"1.2rem"
                }}>
                  {item.value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>

        <CryptoTable />
        <Footer/>
      </Container>
      
      
    </ThemeProvider>
  );
}

export default App;
