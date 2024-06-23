import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
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
    <Grid container alignContent={'center'}>
      <Grid item xs={12} md={12}>
        <section id="home" ref={homeRef} style={{ padding: '50px 0' }}><h1>This is home page</h1></section>
      </Grid>
      <Grid item xs={12} md={12}>
        <section ref={projectsRef} id="projects" style={{ padding: '50px 0' }}>
          <Projects />
        </section>
      </Grid>
      <Grid item xs={12} md={12}>
        <section ref={aboutRef} id="about" style={{ padding: '50px 0' }}>
          <About />
        </section >
      </Grid>
      <Grid item xs={12} md={12}>
        <section ref={contactRef} id="contact" style={{ padding: '50px 0' }}>
          <Contact />
        </section>
      </Grid>
    </Grid>
  );
};

export default Home;