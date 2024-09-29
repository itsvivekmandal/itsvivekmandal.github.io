import React, { useEffect, useState } from 'react';
import { Paper, Stack, Typography, Button, Box, Slide } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import {CardContent} from '@mui/material';

const cards = [
  {
    "name": "Portfolio Website",
    "description": "This project is based on portfolio.",
    "link": "https://www.linkedin.com/in/itsvivekmandal",
    "stack": ["React JS", "Material UI"]
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
    "name": "Weather App",
    "description": "A weather forecast app based on user location.",
    "link": "https://www.linkedin.com/in/itsvivekmandal",
    "stack": ["React JS", "OpenWeather API"]
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
  }
];

const CardLayout = ({ cardDetails }) => {
  const { name, link, description, stack } = cardDetails;

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <CardContent>
        <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography gutterBottom variant="body1" align="left">
          {description}
        </Typography>
        <Typography variant="h7" align="left" sx={{ fontWeight: 'bold' }}>
          Stack Used:
        </Typography>
        <Typography variant="body1" component="span" align="left">
          {stack.map((tech, index) => (
            <span key={index}>
              {index + 1}. {tech}
              <br />
            </span>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Project</Button>
      </CardActions>
    </a>
  );
};

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);  // Track the current starting index of the displayed cards
  const [show, setShow] = useState(true);  // Control slide animation
  const [intervalId, setIntervalId] = useState(null);  // Track the interval ID for clearing it

  useEffect(() => {
    // Function to start the interval for sliding cards
    const startSliding = () => {
      const id = setInterval(() => {
        setShow(false);  // Trigger slide out
        setTimeout(() => {
          // Move to the next 3 cards, loop back to the start if at the end
          setStartIndex((prevIndex) => (prevIndex + 3) % cards.length);
          setShow(true);  // Trigger slide in
        }, 500);  // Slide-out delay
      }, 2500); // Change every 2.5 seconds

      setIntervalId(id);  // Save the interval ID
    };

    startSliding(); // Start sliding cards initially

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Get the current 3 cards to display
  const visibleCards = cards.slice(startIndex, startIndex + 3);

  // If we're near the end and need to wrap around, slice again
  if (visibleCards.length < 3) {
    visibleCards.push(...cards.slice(0, 3 - visibleCards.length));
  }

  // Function to handle mouse enter and leave events to pause and resume sliding
  const handleMouseEnter = () => {
    clearInterval(intervalId);  // Stop sliding on hover
  };

  const handleMouseLeave = () => {
    const id = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setStartIndex((prevIndex) => (prevIndex + 3) % cards.length);
        setShow(true);
      }, 500);
    }, 2500);
    setIntervalId(id);  // Restart the interval when mouse leaves
  };

  return (
    <>
    {/* <Paper elevation={3} sx={{ padding: "15px"}}> */}
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
        Projects
      </Typography>
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        onMouseEnter={handleMouseEnter}  // Pause sliding on hover
        onMouseLeave={handleMouseLeave}  // Resume sliding when not hovered
      >
        <Box
          sx={{
            display: 'flex',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
          }}

        >
          {visibleCards.map((card, index) => (
            <Slide 
              key={index} 
              direction={show ? "left" : "right"} 
              in={show} 
              timeout={500}  // Duration of the sliding animation
            >
              <Card
                variant="outlined"
                sx={{
                  maxWidth: { xs: "80%", md: "30%" },  // Show three cards at a time
                  marginRight: 2,
                  display: 'inline-block',
                  flexShrink: 0,  // Prevent shrinking
                }}
              >
                <CardLayout cardDetails={card} />
              </Card>
            </Slide>
          ))}
        </Box>
      </Stack>
    {/* </Paper> */}
    </>
  );
};

export default Projects;
