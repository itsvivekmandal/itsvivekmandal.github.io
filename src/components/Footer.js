import know_india from "../assets/images/know_india.jpg";
import know_india_2 from "../assets/images/know_india_2.jpg";
import footer from "../assets/images/footer.jpg";
import { Grid } from '@mui/material';
// import '@fontsource/caveat';

const Footer = () => {
  return (
    <div style={{ position: 'relative', textAlign: 'center', width: '100%' }}>
      {/* Background Image */}
      <img src={footer} alt="know_india" width="100%" style={{ opacity: 0.7 }} /> {/* Apply image opacity */}

      {/* Overlay Content */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Grid container spacing={3} style={{ padding: '20px' }}>
          {/* Left Section - Project List */}
          <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
            <h3>Projects</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
              <li>Project 4</li>
            </ul>
          </Grid>

          {/* Center Section - "I Love India!" */}
          <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: "'Caveat', cursive", // Handwritten font
                fontSize: '48px',
                fontWeight: 'bold',
                // backgroundColor: 'rgba(0, 0, 0, 0.4)', // Optional background for text
                padding: '10px 20px',
                borderRadius: '10px',
              }}
            >
              I ❤️ India!
            </div>
          </Grid>

          {/* Right Section - Social Media Links */}
          <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
            <h3>Follow Us</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="https://facebook.com" style={{ color: 'white', textDecoration: 'none' }}>Facebook</a></li>
              <li><a href="https://twitter.com" style={{ color: 'white', textDecoration: 'none' }}>Twitter</a></li>
              <li><a href="https://instagram.com" style={{ color: 'white', textDecoration: 'none' }}>Instagram</a></li>
            </ul>
          </Grid>
        </Grid>
      </div>

      {/* Copywrite Message */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          textAlign: 'center',
          color: 'white',
          fontSize: '14px',
        }}
      >
        © 2024 All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
