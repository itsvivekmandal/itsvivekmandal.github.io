import React from 'react';
import { Grid, Paper, Typography, Button, Stack, Box, Chip } from '@mui/material';
import Heading from './Heading';


const projectList = [
    {
        "name": "Tic Tac Toe",
        "description": "This is a game.",
        "link": "https://tic-tak-toe-pink.vercel.app/",
        "stack": ["Next Js", "Tailwind CSS"]
    },
    {
        "name": "Online Food Ordering System",
        "description": "This project is a food ordering system with various features.",
        "link": "https://www.linkedin.com/in/itsvivekmandal",
        "stack": ["Node Js", "React JS", "Tailwind CSS"]
    },
    {
        "name": "E-commerce Platform",
        "description": "An e-commerce platform with a full shopping cart and checkout system.",
        "link": "https://www.linkedin.com/in/itsvivekmandal",
        "stack": ["React JS", "Node JS", "MongoDB"]
    },
    {
        "name": "Chat Application",
        "description": "A real-time chat application using WebSockets.",
        "link": "https://www.linkedin.com/in/itsvivekmandal",
        "stack": ["Node Js", "React JS", "Socket.IO"]
    },
    {
        "name": "Social Media Dashboard",
        "description": "A dashboard for tracking social media analytics.",
        "link": "https://www.linkedin.com/in/itsvivekmandal",
        "stack": ["React JS", "Material UI", "Firebase"]
    },
    {
        "name": "Portfolio Website",
        "description": "This project is based on portfolio.",
        "link": "https://www.linkedin.com/in/itsvivekmandal",
        "stack": ["React JS", "Material UI"]
    },
    {
        "name": "Weather App",
        "description": "A weather forecast app based on user location.",
        "link": "https://www.linkedin.com/in/itsvivekmandal",
        "stack": ["React JS", "OpenWeather API"]
    }
];

const ProjectsPaper = ({ project }) => {
  const { name, link, description, stack } = project;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <a 
        // href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Paper elevation={8}
          sx={{
                p: 3,
                flex: 2, // 🔥 ensures it stretches to equal height
                display: 'flex',
                textAlign: 'left',
                flexDirection: 'column',
                justifyContent: 'space-between', // keeps button at bottom
                transition: 'box-shadow 0.4s ease, transform 0.3s ease',
                '&:hover': {
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.5)',
                transform: 'translateY(-8px)',
                },
            }}
        >
            <Stack spacing={2}>
                {/* Title */}
                <Typography variant="h6" fontWeight="bold">
                {name}
                </Typography>

                {/* Description */}
                <Typography variant="body1" color="text.secondary">
                {description}
                </Typography>

                {/* Stack Used */}
                <Box>
                <Typography variant="body1" fontWeight="bold" mb={1}>
                    Stack Used:
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                    {stack.map((tech, index) => (
                    <Chip
                        key={index}
                        label={tech}
                        size="small"
                        sx={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        backgroundColor: '#f5f5f5',
                        }}
                    />
                    ))}
                </Stack>
                </Box>

                {/* View Button */}
                <Button
                variant="contained"
                color="secondary"
                href={link}
                target="_blank"
                sx={{ alignSelf: 'flex-start', textTransform: 'none' }}
                >
                View
                </Button>
            </Stack>
        </Paper>
      </a>
    </Grid>
  );
};

const Projects = () => {
  return (
    <>
      <Heading name="Projects" />
      <Grid container spacing={3} style={{ padding: '20px' }} justifyContent="center">
      {
        projectList.map((project, index) => (
          <ProjectsPaper key={index} project={project} />
        ))
      }
      </Grid>
    </>
  );
}

export default Projects;
