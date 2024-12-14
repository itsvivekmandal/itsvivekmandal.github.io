import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Use useParams to get sectionId from the route
import { Grid } from '@mui/material';
import Home from './Home';
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Testimonials from './Testimonials';

const Body = () => {
  const { sectionId } = useParams();  // Extract sectionId from the route
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Check if sectionId exists and match it to the correct section
    const sectionRef = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
    }[sectionId || 'home'];

    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
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
      <Grid item xs={12} md={12} style={{ padding: '20px 15px' }}>
        <Testimonials />
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
