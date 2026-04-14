import { useEffect, useState } from "react";
import { Grid, Typography, Button, Link, Stack, Divider } from "@mui/material";
import CountUp from "react-countup";
import Avatar from "@mui/material/Avatar";
import { BarChart } from '@mui/x-charts/BarChart';
import apiService from "../api/apiService";
import { useTheme } from '@mui/material/styles';
import Heading from "./Heading";
import { ResponsiveLine } from '@nivo/line';
// import resume
import resume from "../assets/resume/resume.pdf";
// import icons
import profile from "../assets/images/profile.jpg";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import leetcode from "../assets/images/leetcode.png";
import stackoverflow from "../assets/images/stack.png";
import mail from "../assets/images/mail.png";
import node from "../assets/images/node.png";
import javascript from "../assets/images/javascript.png";
import php from "../assets/images/php.png";
import html from "../assets/images/html.png";
import mongodb from "../assets/images/mongodb.png";
import docker from "../assets/images/docker.png";
import mysql from "../assets/images/mysql.png";
import react from "../assets/images/react.png";
import git from "../assets/images/git.png";
import css from "../assets/images/css.png";
import express from "../assets/images/express.png";
import postman from "../assets/images/postman.png";
import laravel from "../assets/images/laravel.png";
import bootstrap from "../assets/images/bootstrap.png";
// import typescript from "../assets/images/typescript.png";
// import tailwind from "../assets/images/tailwind.png";
// import next from "../assets/images/next.png";

const AboutMe = ({downloadResume}) => {
    const getAgeLabel = () => {
        const birthDate = new Date('1994-01-04');
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();

        const hasBirthdayPassed =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate());

        if (!hasBirthdayPassed) age--;

        const decade = Math.floor(age / 10) * 10;
        const lastDigit = age % 10;

        let phase = "";

        if (lastDigit <= 3) phase = "Early";
        else if (lastDigit <= 6) phase = "Mid";
        else phase = "Late";

        return `${phase} ${decade}s`;
    };

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
                    Hi, I'm Vivek Mandal, a passionate Software Engineer at eBrandz, currently enjoying my {getAgeLabel()}. I thrive on challenges and have a deep love for coding, turning ideas into reality through elegant solutions.<br/>
                    At eBrandz, I contribute to innovative projects that push boundaries in web development. My motivation stems from seeing ideas come to life and making a tangible impact on the digital landscape.<br/>
                    Let's connect and explore how we can innovate together. I'm always eager to collaborate on exciting projects that challenge the norm.
                    </span>
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
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

    const dataset = [
        { skill: 'Node', value: 5 },
        { skill: 'React', value: 4.5 },
        { skill: 'PHP', value: 8 },
        { skill: 'JS', value: 7 },
        { skill: 'Sql', value: 8 },
        { skill: 'Mongo', value: 4 },
        { skill: 'Docker', value: 5 },
    ];

    // const icons = [node, express, react, mongodb, javascript, git, docker, php, mysql, tailwind, bootstrap, html, css, typescript, next, postman];
    const icons = [node, express, react, mongodb, javascript, git, docker, php, laravel, mysql, bootstrap, html, css, postman];
    const theme = useTheme();

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

                    <Stack
                        direction="row"
                        spacing={6}
                        flexWrap="wrap"
                        justifyContent="center"
                    >
                        {icons.map((img, i) => {
                            const duration = 3 + Math.random();
                            const delay = Math.random() * 2;

                            return (
                            <img
                                key={i}
                                src={img}
                                alt="tech"
                                className="float"
                                style={{
                                    margin: "10px",
                                    animation: `float ${duration}s ease-in-out ${delay}s infinite`
                                }}
                            />
                            );
                        })}
                    </Stack>
                </Stack>
                <Stack
                    direction="column"
                    alignItems="center"
                    spacing={2}
                    sx={{ width: '100%' }}
                >
                    <BarChart
                        dataset={dataset}

                        // X-axis (values)
                        xAxis={[{ max: 10 }]}

                        // Y-axis (categories)
                        yAxis={[{ scaleType: 'band', dataKey: 'skill' }]}

                        // Series
                        series={[
                            {
                                dataKey: 'value',
                                label: 'Skill Level',
                                // color: "#7952B3",
                                color: theme.palette.primary.main,
                            },
                        ]}

                        layout="horizontal"
                        height={400}

                        grid={{ vertical: true }}

                        slotProps={{
                            legend: { hidden: true },
                        }}
                    />
                </Stack>
            </Stack>
        </>
    );
};

const Progress = () => {

    const staticData = [
        {
            "id": "progress",
            "data": [
                {
                    "x": "2021-H2",
                    "y": 0
                },
                {
                    "x": "2022-H1",
                    "y": 0
                },
                {
                    "x": "2022-H2",
                    "y": 0
                },
                {
                    "x": "2023-H1",
                    "y": 4
                },
                {
                    "x": "2023-H2",
                    "y": 37
                },
                {
                    "x": "2024-H1",
                    "y": 21
                },
                {
                    "x": "2024-H2",
                    "y": 32
                },
                {
                    "x": "2025-H1",
                    "y": 10
                },
                {
                    "x": "2025-H2",
                    "y": 21
                },
                {
                    "x": "2026-H1",
                    "y": 22
                }
            ]
        }
    ];

    const [chartData, setChartData] = useState(staticData);
    const theme = useTheme();

    useEffect(() => {
        const getData = async () => {
            const result = await apiService.portfolioInfo();

            if (result) {
                setChartData(result?.data?.progressInfo);
            }
        };

        getData();

    }, []);

    return (
        <Grid container direction="column" alignItems="center">
        <Grid>
            <Heading name="Life Time Progress" />
        </Grid>

        <Grid sx={{ width: { xs: "100%", md: "80%" }, aspectRatio: "4 / 1" }}>
            <ResponsiveLine
                data={chartData}

                // Smooth curve (trading feel)
                curve="monotoneX"

                // Remove axes
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}

                // Remove grid
                enableGridX={false}
                enableGridY={false}

                // Points off (clean line)
                enablePoints={false}

                // Tooltip (on hover)
                useMesh={true}

                tooltip={({ point }) => (
                    <div style={{
                        background: "#111",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        color: "#fff",
                        fontSize: "12px"
                    }}>
                    📅 {point.data.x}<br />
                    ⚡ {point.data.y} commits
                    </div>
                )}

                // colors={["#7952B3"]}
                colors={[theme.palette.primary.main]}

                lineWidth={3}

                enableArea={true}
                areaOpacity={0.2}
            />
        </Grid>
        </Grid>
    );
};

const AnimatedCounter = () => {
    const getDaysSince = (startDate) => {
        const start = new Date(startDate);
        const today = new Date();

        const diffTime = today - start;
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    };

    const startDate = "2018-12-03";

    const days = getDaysSince(startDate);

    const linesOfCode = days * 60;
    const coffeeCups = days * 3;
    const yearsOfExperience = ((new Date() - new Date(startDate)) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);

    return (
        <Grid container spacing={4} style={{ padding: '20px' }} justifyContent="center">
        <Grid item xs={12} md={2} style={{ textAlign: 'center' }}>
            <Typography variant="h3" color="primary"><CountUp start={0} end={linesOfCode} duration={5} />+</Typography>
            <Typography variant="h6" gutterBottom>Lines of code</Typography>
        </Grid>
        <Grid item xs={12} md={2} style={{ textAlign: 'center' }}>
            <Typography variant="h3" color="primary"><CountUp start={0} end={coffeeCups} duration={5} />+</Typography>
            <Typography variant="h6" gutterBottom>Cups of coffee drunk</Typography>
        </Grid>
        <Grid item xs={12} md={2} style={{ textAlign: 'center' }}>
            <Typography variant="h3" color="primary"><CountUp start={0} end={19} duration={5} />+</Typography>
            <Typography variant="h6" gutterBottom>Projects completed</Typography>
        </Grid>
        <Grid item xs={12} md={2} style={{ textAlign: 'center' }}>
            <Typography variant="h3" color="primary"><CountUp start={0} end={yearsOfExperience} duration={5} />+</Typography>
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
            {/* <Divider /> */}
            <AnimatedCounter />
        </>
    )
};

export default About;
