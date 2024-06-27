import { Grid } from '@mui/material';
import clouds from '../assets/images/clouds.png';

const Home = () => {
  return (
        <img src={clouds} alt="clouds" className='banner'/>
    // <Grid container alignItems={'center'}>
    //   <Grid item>
    //   </Grid>
    // </Grid>
  )
};

export default Home;