import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Heading from './Heading';


const projectList = [
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
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Paper elevation={8}
          sx={{
            padding: '20px', 
            textAlign: 'center',
            color: '#333', 
            // height: '200px' // adjust as needed
            transition: 'box-shadow 0.5s ease', // Smooth transition
            "&:hover": {
              // opacity: 0.5,
              boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>{name}</Typography>
          <Typography gutterBottom variant="body1" align="left">{description}</Typography>
          <Typography gutterBottom variant="body1" align="left" sx={{ fontWeight: 'bold' }}>
            Stack Used:
          </Typography>
          <Typography variant="body1" align="left">
            {stack.map((tech, index) => (
              <span key={index}>
                {index + 1}. {tech}
                <br />
              </span>
            ))}
          </Typography>
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
