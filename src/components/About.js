import React, { useEffect, useState } from "react";
import { Grid, Typography, Button, Link, Stack, Divider } from "@mui/material";
import CountUp from "react-countup";
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
import {LineChart} from "@mui/x-charts/LineChart";
import Heading from "./Heading";
import apiService from "../api/apiService";

const AboutMe = ({downloadResume}) => {
  return (
    <>
      <Heading name="About Me" />
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
        <Stack direction="column" spacing={4} sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography variant="body1" align="left" fontSize="1.2rem">
            <span>
              Hi, I'm Vivek Mandal, a passionate Software Engineer based in eBrandz, currently enjoying my 30s. I thrive on challenges and have a deep love for coding, turning ideas into reality through elegant solutions.<br/>
              At eBrandz, I contribute to innovative projects that push boundaries in web development. My motivation stems from seeing ideas come to life and making a tangible impact on the digital landscape.<br/>
              Let's connect and explore how we can innovate together. I'm always eager to collaborate on exciting projects that challenge the norm.
            </span>
          </Typography>
          {/* <Stack direction="row" spacing={2} justifyContent="left" sx={{ padding: "15px"}}>
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
          </Stack> */}
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={downloadResume}
            sx={{ alignSelf: { xs: "center", md: "flex-start" }}} // Center button on mobile, left on larger screens
          >
            Download My Resume
          </Button>
        </Stack>
      </Stack>
    </>
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
    <>
      <Heading name="Skills" />
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
    </>
  );
};

const Progress = () => {

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await apiService.portfolioInfo();
      if (result) {
        setChartData(result.data.progressInfo);
      }
    };
    getData();
  }, []);
  
  return (
    <>
    {
      chartData ? (
        <Grid container direction="column"  justifyContent="center" alignItems="center">
          <Grid><Heading name="Life Time Progress" /></Grid>
          <Grid sx={{width: { xs: "100%", md: "80%" }}}>
            <LineChart
              xAxis={[{scaleType: 'band', data: chartData.xAxis }]}
              series={[
                {
                  data: chartData.series,
                  area: true
                },
              ]}
              height="300"
            />
          </Grid>
        </Grid>
      ):(
        <div>Loading...</div>
      )
    }
    </>
  );
};

const AnimatedCounter = () => {
  return (
    <Grid container spacing={4} style={{ padding: '20px' }} justifyContent="center">
      <Grid item xs={12} md={2} style={{ textAlign: 'center' }}>
        <Typography variant="h3" color="secondary"><CountUp start={0} end={150000} duration={4.5} />+</Typography>
        <Typography variant="h6" gutterBottom>Lines of code</Typography>
      </Grid>
      <Grid item xs={12} md={2} style={{ textAlign: 'center' }}>
        <Typography variant="h3" color="secondary"><CountUp start={0} end={1000} duration={4.5} />+</Typography>
        <Typography variant="h6" gutterBottom>Cups of coffee drunk</Typography>
      </Grid>
      <Grid item xs={12} md={2} style={{ textAlign: 'center' }}>
        <Typography variant="h3" color="secondary"><CountUp start={0} end={19} duration={4.5} />+</Typography>
        <Typography variant="h6" gutterBottom>Projects completed</Typography>
      </Grid>
      <Grid item xs={12} md={2} style={{ textAlign: 'center' }}>
        <Typography variant="h3" color="secondary"><CountUp start={0} end={5} duration={4.5} />+</Typography>
        <Typography variant="h6" gutterBottom>Years of experience</Typography>
      </Grid>
    </Grid>
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
      <Progress />
      <Divider />
      <AnimatedCounter />
    </>
  )
};

export default About;
