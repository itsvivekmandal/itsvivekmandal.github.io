import { Grid, Typography } from '@mui/material';
import clouds from '../assets/images/clouds.png';
import plane from '../assets/images/plane_1.gif';
import TypewriterComponent from 'typewriter-effect';
// import {Typography} from '@mui/material';

const Home = () => {
  return (
    <>
      <div className="container">
        <img src={clouds} alt="clouds" className='banner'/>
        <img src={plane} alt="Overlay" className="overlay-image fly-right" />
        <Typography
          variant="h4"
          component="p"
          sx={{
            position: 'absolute',
            top: '40%',
            left: '40%',
            color: 'white',
          }}
         > I am
          <TypewriterComponent
            options={{
              strings: ['Vivek', 'a software engineer', 'a web developer'],
              autoStart: true,
              loop: true
            }}
          />
        </Typography>
      </div>
    </>
  )
};

export default Home;