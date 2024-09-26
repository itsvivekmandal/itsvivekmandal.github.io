import React, { useState } from "react";
import { Typography, Button, Link, Stack, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import profile from "../assets/images/profile.jpg";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import leetcode from "../assets/images/leetcode.png";
import stackoverflow from "../assets/images/stack.png";
import mail from "../assets/images/mail.png";
import resume from "../assets/resume/resume.pdf";
import { BarChart } from '@mui/x-charts/BarChart';
import node from "../assets/images/node.svg";
import javascript from "../assets/images/javascript.svg";
import php from "../assets/images/php.svg";
import html from "../assets/images/html.svg";
import mongodb from "../assets/images/mongo.png";
import mysql from "../assets/images/mysql.svg";
import react from "../assets/images/react.svg";
import git from "../assets/images/git.svg";
import bootstrap from "../assets/images/bootstrap.png";

const AboutMe = ({downloadResume}) => {
  return (
    <Paper elevation={3} sx={{ padding: "24px", margin: "16px 0" }}>
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
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4} // Space between elements
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Avatar and Social Links */}
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
        >
          {/* Avatar */}
          <Avatar
            alt="Profile Picture"
            src={profile}
            sx={{
              width: { xs: "70%", md: "50%" }, // Adjust size for mobile and larger screens
              height: "auto",
              margin: "auto",
              marginBottom: "16px",
            }}
          />
          {/* Social Links */}
          <Stack direction="row" spacing={2} justifyContent="center">
            <Link href="https://github.com/itsvivekmandal" target="_blank">
              <img src={github} alt="github" width={35} />
            </Link>
            <Link href="https://www.linkedin.com/in/itsvivekmandal" target="_blank">
              <img src={linkedin} alt="linkedin" width={35} />
            </Link>
            <Link href="https://stackoverflow.com/users/10856577/vivek-mandal" target="_blank">
              <img src={stackoverflow} alt="stackoverflow" width={35} />
            </Link>
            <Link href="https://leetcode.com/u/VivekMandal" target="_blank">
              <img src={leetcode} alt="leetcode" width={35} />
            </Link>
            <Link href="mailto:vivek248.vm@gmail.com" target="_blank">
              <img src={mail} alt="mail" width={35} />
            </Link>
          </Stack>
        </Stack>

        {/* Bio Section */}
        <Stack direction="column" spacing={2} sx={{ width: { xs: "100%", md: "60%" } }}>
          <Typography variant="body1" align="left" fontSize="1.2rem">
            <span>
              Hi, I'm Vivek Mandal, a passionate Software Engineer based in eBrandz, currently enjoying my 30s. I thrive on challenges and have a deep love for coding, turning ideas into reality through elegant solutions.<br/>
              At eBrandz, I contribute to innovative projects that push boundaries in web development. My motivation stems from seeing ideas come to life and making a tangible impact on the digital landscape.<br/>
              Let's connect and explore how we can innovate together. I'm always eager to collaborate on exciting projects that challenge the norm.
            </span>
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={downloadResume}
            sx={{ alignSelf: { xs: "center", md: "flex-start" }, marginTop: "16px" }} // Center button on mobile, left on larger screens
          >
            Download My Resume
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

const Skills = () => {
  const [highlightedItem, setHighLightedItem] = useState(null);

  const barChartsProps = {
    series: [
      {
        data: [5, 4.5, 8, 7, 8, 4],
        id: 'sync',
        highlightScope: { highlight: 'item', fade: 'global' },
      },
    ],
    xAxis: [{ scaleType: 'band', data: ['Node', 'React', 'PHP', 'JavaScript', 'Sql', 'Mongo'] }],
    yAxis: [{max: 10}],
    height: 400,
    slotProps: {
      legend: {
        hidden: true,
      },
    },
  };
  
  return (
    <Paper elevation={3} sx={{ padding: "15px", margin: "16px 0" }}>
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
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4} // Space between elements
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          direction="column"
          alignItems="center"
          spacing={4}
          sx={{ width: '100%' }}
        >
          <Stack direction="row" spacing={6}>
            <img src={node} alt="node" width={70} />
            <img src={react} alt="react" width={70} />
            <img src={php} alt="php" width={70} />
          </Stack>
          <Stack direction="row" spacing={6}>
            <img src={javascript} alt="javascript" width={70} />
            <img src={mongodb} alt="mongodb" width={70} />
            <img src={mysql} alt="mysql" width={70} />
          </Stack>
          <Stack direction="row" spacing={6}>
            <img src={html} alt="html" width={70} />
            <img src={bootstrap} alt="bootstrap" width={70} />
            <img src={git} alt="git" width={70} />
          </Stack>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{ width: '100%' }}
        >
          <BarChart
            {...barChartsProps}
            highlightedItem={highlightedItem}
            onHighlightChange={setHighLightedItem}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

const About = () => {

  const downloadResume = () => {
    const anchor = document.createElement('a');
    anchor.href = resume;
    anchor.download = 'vivek_mandal_resume.pdf';
    anchor.click();
    // Cleanup: Remove the anchor element
    anchor.remove();
  };

  return (
    <>
      <AboutMe downloadResume={downloadResume} />
      <Skills/>
    </>
  )
};

export default About;
