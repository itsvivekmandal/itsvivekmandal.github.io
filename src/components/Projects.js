import React, { useEffect, useRef, useState } from 'react';
import { Paper, Stack, Typography, Button, Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const cards = [
  {
    "name": "Portfoli Website",
    "discription": "This project is based on portfolio.",
    "link": "https://www.linkedin.com/in/itsvivekmandal",
    "stack": ["React JS", "Materila UI"]
  },
  {
    "name": "Online Food Ordering System",
    "discription": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    "link": "https://www.linkedin.com/in/itsvivekmandal",
    "stack": ["Node Js", "React JS", "Tailwind CSS"]
  },
  {
    "name": "Online Food Ordering System 1",
    "discription": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    "link": "https://www.linkedin.com/in/itsvivekmandal",
    "stack": ["Node Js", "React JS", "PHP"]
  },
  {
    "name": "Online Food Ordering System 2",
    "discription": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    "link": "https://www.linkedin.com/in/itsvivekmandal",
    "stack": ["Node Js", "React JS", "PHP", "My Sql"]
  },
  {
    "name": "Online Food Ordering System 3",
    "discription": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    "link": "https://www.linkedin.com/in/itsvivekmandal",
    "stack": ["Node Js", "React JS", "PHP", "Mongo DB"]
  }
];

const CardLayout = ({cardDetails}) => {
  const {name, link, discription, stack} = cardDetails;

  return (
    <>
      <a 
        href={link} // Replace with your target URL
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security feature to prevent the new page from having access to your page
        style={{ textDecoration: 'none', color: 'inherit' }} // Style to remove underline and inherit color
      >
        <CardContent>
          <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', display: 'block' }}>
            {name}
          </Typography>
          <Typography 
            gutterBottom 
            variant="body1" 
            align="left" 
            sx={{ width: '100%', whiteSpace: 'normal' }}
          >
            {discription}
          </Typography>
          <Typography variant="h7" align="left" sx={{ fontWeight: 'bold', display: 'block' }}>
            Stack Used :-
          </Typography>
          <Typography variant="body1" component="span" align="left" sx={{ display: 'block' }}>
            {
              stack.map((tech, index) => (
                <span key={index}>
                  {index + 1}. {tech}
                  <br />
                </span>
              ))
            }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View Project</Button>
        </CardActions>
      </a>
    </>
  );
}

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Auto-scrolling logic
  useEffect(() => {
    const scrollContainer = containerRef.current;
    let scrollStep = 10; // The amount to scroll per step
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollStep = -10; // Reverse scroll direction when reaching the end
        } else if (scrollContainer.scrollLeft <= 0) {
          scrollStep = 10; // Scroll forward from the start
        }
        scrollContainer.scrollLeft += scrollStep;
      }, 10); // Adjust this to change the speed
    };

    if(!isHovered) startScrolling();

    // Cleanup interval when component unmounts
    return () => clearInterval(scrollInterval);
  }, [isHovered]);

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
                Projects  
            </Typography>
            <Stack
              direction="row"
              spacing={4} // Space between elements
              alignItems="center"
              justifyContent="space-between"
              onMouseEnter={() => setIsHovered(true)} // Stop scrolling on hover
              onMouseLeave={() => setIsHovered(false)}
            >
              <Box 
                ref={containerRef}
                direction="row" 
                sx={{
                  display: 'flex',
                  overflowX: 'auto',
                  whiteSpace: 'nowrap',
                  scrollBehavior: 'smooth',
                  '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar in Chrome, Safari
                  '-ms-overflow-style': 'none', // Hide scrollbar in IE and Edge
                  scrollbarWidth: 'none', // Hide scrollbar in Firefox
                }}
              >
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    variant="outlined"
                    sx={{
                      maxWidth: 400,
                      marginRight: 2,
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  >
                    <CardLayout cardDetails={card} />
                  </Card>
                ))}
              </Box>
            </Stack>
        </Paper>
    )
};

export default Projects;