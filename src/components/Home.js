import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
    <>
      <section id="home" ref={homeRef} style={{height: 500}}><h1>This is home page</h1></section>
      <section ref={aboutRef} id="about" style={{ padding: '50px 0' }}>
        <About />
      </section>
      <section ref={projectsRef} id="projects" style={{ padding: '50px 0' }}>
        <Projects />
      </section>
      <section ref={contactRef} id="contact" style={{ padding: '50px 0' }}>
        <Contact />
      </section>
    </>
  );
};

export default Home;