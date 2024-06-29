import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import Home from './Home';
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const Body = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const sectionRef = {
        home: homeRef,
        about: aboutRef,
        projects: projectsRef,
        contact: contactRef,
      }[sectionId];

      if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return(
    <Grid container>
      <Grid item xs={12} md={12}>
        <section id="home" ref={homeRef}>
          <Home />
        </section>
      </Grid>
      <Grid item xs={12} md={12}>
        <section ref={aboutRef} id="about" style={{ padding: '20px 15px' }}>
          <About />
        </section >
      </Grid>
      <Grid item xs={12} md={12}>
        <section ref={projectsRef} id="projects" style={{ padding: '20px 15px' }}>
          <Projects />
        </section>
      </Grid>
      <Grid item xs={12} md={12}>
        <section ref={contactRef} id="contact" style={{ padding: '20px 15px' }}>
          <Contact />
        </section>
      </Grid>
    </Grid>
  );
};

export default Body;