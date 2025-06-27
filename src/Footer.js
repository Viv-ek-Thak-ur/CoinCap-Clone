
import { Box, Grid, Typography, Link, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Using as placeholder for "X" (Twitter/X)

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(to right,  #304cbd, #61b5d5)",
        color: "white",
        py: 5,
        px: { xs: 2, sm: 6 },
        mt: 4,
        minWidth:"100vw"
      }}
    >
      <Grid container spacing={4}>
        {/* COINCAP.IO */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            COINCAP.IO
          </Typography>
          <Stack spacing={1}>
            <Link href="#" color="inherit" underline="hover">
              Methodology
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Support (Discord)
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Our API
            </Link>
          </Stack>
        </Grid>

        {/* LEGALS + DISCLAIMER */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            LEGALS
          </Typography>
          <Stack spacing={1} mb={2}>
            <Link href="#" color="inherit" underline="hover">
              Terms of Service
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Stack>
          <Typography
            variant="caption"
            color="rgba(255, 255, 255, 0.8)"
            display="block"
          >
            DISCLAIMER
          </Typography>
          <Typography
            variant="caption"
            color="rgba(255, 255, 255, 0.6)"
            sx={{ mt: 0.5 }}
            display="block"
          >
            Neither ShapeShift AG nor CoinCap are in any way associated with
            CoinMarketCap, LLC or any of its goods and services.
          </Typography>
        </Grid>

        {/* CONNECT WITH US */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            CONNECT WITH US
          </Typography>
          <Stack direction="row" spacing={2}>
            <Box
              component="img"
              src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/discord.svg"
              alt="Discord"
              sx={{ width: 28, height: 28 }}
            />
            <CloseIcon fontSize="large" /> {/* X icon */}
          </Stack>
        </Grid>

        {/* MOBILE APP LINKS */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            COINCAP APP AVAILABLE ON
          </Typography>
          <Stack spacing={1}>
            <Box
              component="img"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Google Play"
              sx={{ width: 120 }}
            />
            <Box
              component="img"
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              sx={{ width: 120 }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
