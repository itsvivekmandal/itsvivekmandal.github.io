import { Grid, Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Heading from './Heading';
import profile from '../assets/images/profile.jpg';
import munshi_premchand from '../assets/images/munsi_premchand.png';
import vivekanand from '../assets/images/swami-vivekananda.webp';
import ratan_tata from '../assets/images/ratan-tata.jpg';
import steve_jobs from '../assets/images/steve_jobs.jpg';

const quotes = [
  {
    author: "मुंशी प्रेमचंद",
    role: 'उपन्यासकार, कहानीकार एवं विचारक',
    statement: 'खाने और सोने का नाम जीवन नहीं है, जीवन नाम है, आगे बढ़ते रहने की लगन का।',
    profle: munshi_premchand
  },
  {
    author: 'Ratan Tata',
    role: 'Industrialist & Philanthropist',
    statement: 'Take the stones people throw at you and use them to build a monument.',
    profle: ratan_tata
  },
  {
    author: "Steve Jobs",
    role: 'Co-founder and CEO of Apple Inc.',
    statement: 'Computers themselves, and software yet to be developed, will revolutionize the way we learn.',
    profle: steve_jobs
  },
  {
    author: 'Swami Vivekananda',
    role: 'Philosopher',
    statement: 'Arise, awake and Stop not till the Goal is Reached.',
    profle: vivekanand
  }
];

const Testimonials = () => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid xs="12" md="12"><Heading name='Fuel for the Soul' /></Grid>
      <Grid xs="12" md="8">
        <Paper elevation={10}>
          <Carousel indicators={false} interval={4000} animation="slide">
            {
              quotes.map((quote, index) => (
                <Grid container justifyContent={"center"} alignItems={"center"}>
                  <Grid xs="12" md="4" sx={{bgcolor: '#E8E8E8', padding: "25px 15px"}}>
                    <img src={quote.profle} alt={quote.author} style={{width: "150px", borderRadius: "50%"}}/>
                    <Typography gutterTop variant='h5' color="secondary" sx={{paddingTop: '20px'}}>{quote.author}</Typography>
                    <Typography variant='body1' color={"text.secondary"}>{quote.role}</Typography>
                  </Grid>
                  <Grid xs="12" md="8">
                    <Typography variant='h4' color={"text.secondary"} sx={{padding: '20px'}}>
                    &#8220; {quote.statement} &#8221;
                    </Typography>
                  </Grid>
                </Grid>
              ))
            }
          </Carousel>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Testimonials;