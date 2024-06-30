import React from "react";
import { Grid,Box, Typography, Button, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import profile from "../assets/images/profile.jpg";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import leetcode from "../assets/images/leetcode.png";
import stackoverflow from "../assets/images/stack.png";
import mail from "../assets/images/mail.png";
import resume from "../assets/resume/resume.pdf";
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const About = () => {

  const settings = {
    width: 150,
    height: 150,
    value: 90,
  };  

  const downloadResume = () => {
    const anchor = document.createElement('a');
    anchor.href = resume;
    anchor.download = 'vivek_mandal_resume.pdf';
    anchor.click();
    // Cleanup: Remove the anchor element
    anchor.remove();
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={12} textAlign="center">
        <Typography variant="h4" gutterBottom
          sx={{
            position: 'relative',
            display: 'inline-block',
            marginTop: '16px',
            marginBottom: '16px',
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: 0,
              height: '2px',
              width: '100%',
              backgroundColor: "#9c27b0",
            },
          }}
        >
          About Me  
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} textAlign="center">
          <Avatar
            alt="Profile Picture"
            src={profile}
            sx={{
              width: '50%',
              height: 'auto',
              margin: 'auto',
              marginBottom: '20px'
            }}
          />
          <div style={{ display: 'inline-flex', gap: '15px' }}>
            <Link href="https://github.com/itsvivekmandal" target="_blank">
              <img src={github} alt="github" width={35}/>
            </Link>
            <Link href="https://www.linkedin.com/in/itsvivekmandal" target="_blank">
              <img src={linkedin} alt="linkedin" width={35}/>
            </Link>
            <Link href="https://stackoverflow.com/users/10856577/vivek-mandal" target="_blank">
              <img src={stackoverflow} alt="stackoverflow" width={35}/>
            </Link>
            <Link href="https://leetcode.com/u/VivekMandal" target="_blank">
              <img src={leetcode} alt="leetcode" width={35}/>
            </Link>
            <Link href="mailto:vivek248.vm@gmail.com" target="_blank">
              <img src={mail} alt="mail" width={35}/>
            </Link>
          </div>
      </Grid>
      <Grid item xs={12} md={4} textAlign="center">
        <Typography variant="body1" paragraph align="left" fontSize='1.2rem'>
          Hi, I'm Vivek Mandal, a passionate Software Engineer based in eBrandz, currently enjoying my 30s. I thrive on challenges and have a deep love for coding, turning ideas into reality through elegant solutions.
        </Typography>
        <Typography variant="body1" paragraph align="left" fontSize='1.2rem'>
          At eBrandz, I contribute to innovative projects that push boundaries in web development. My motivation stems from seeing ideas come to life and making a tangible impact on the digital landscape.
        </Typography>
        <Typography variant="body1" align="left" fontSize='1.2rem'>
          Let's connect and explore how we can innovate together. I'm always eager to collaborate on exciting projects that challenge the norm.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={downloadResume}
          sx={{ marginTop: '16px', marginLeft: '8px' }}
        >
          Download My Resume
        </Button>
      </Grid>
      <Grid item xs={12} md={12} textAlign="center">
        <Typography variant="h4" gutterBottom
          sx={{
            position: 'relative',
            display: 'inline-block',
            marginTop: '16px',
            marginBottom: '16px',
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: 0,
              height: '2px',
              width: '100%',
              backgroundColor: "#9c27b0",
            },
          }}
        >
          Skills
        </Typography>
        <div>
          <Gauge
            {...settings}
            cornerRadius="50%"
            sx={(theme) => ({
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 40,
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: '#52b202',
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: theme.palette.text.disabled,
              },
            })}
          />
        </div>
      </Grid>
    </Grid>
  )
};

export default About;