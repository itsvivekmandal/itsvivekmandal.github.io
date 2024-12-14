import india from "../assets/images/india.png";
import { Grid, Typography, useMediaQuery, useTheme} from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container spacing={3} style={{ padding: '20px' }} justifyContent="center">
      <Grid item xs={12} md={12} style={{ textAlign: 'center' }}>
        <Typography
            component="p"
            sx={{
              fontFamily: '"Dancing Script", cursive',
              fontSize: '3rem',
              color: '#9c27b0'
            }}
          >
          Vivek Mandal
        </Typography>
        <Typography component="p" sx={{color: '#848484'}}>
          Coded with ❤️ using React in India 🇮🇳
        </Typography>
        <img src={india} alt="know_india"
          style={{
            // width: isSmallScreen ? '100%' : '40%', // 100% on small screens, 40% on larger
            maxWidth: '100%'
          }}
        />
        <Typography variant="body2" color={"text.secondary"}>No &copy; copyright issues - {new Date().getFullYear()}</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
