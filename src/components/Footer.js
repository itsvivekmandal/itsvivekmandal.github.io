import know_india from "../assets/images/know_india.jpg";
import india from "../assets/images/india.jpg";
import footer from "../assets/images/footer.jpg";
import { Grid } from '@mui/material';
// import '@fontsource/caveat';

const Footer = () => {
  return (
    <div style={{ position: 'relative', textAlign: 'center', width: '100%' }}>
      {/* Background Image */}
      <img src={india} alt="know_india" width="40%"  /> {/* Apply image opacity */}
    </div>
  );
};

export default Footer;
