import { Grid, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contact = () => {

  const [message, setMessage] = useState('');

  const handleSendClick = () => {
    const templateParams = {
      message: message,
    };

    emailjs
      .sendForm('service_un4yhlp', 'template_2k7hukh', templateParams, {
        publicKey: 'JcofCbTzD5TK6QpPp',
      })
    .then(
      (result) => {
        console.log('Message sent successfully.', result.text);
      },
      (error) => {
        console.log('Failed to send message.', error.text);
      }
    );
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} md={6}>
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
            Contact Me
          </Typography>
          <TextField 
            label="Write a message for me" 
            color="secondary" 
            variant="standard" 
            multiline 
            maxRows={4} 
            fullWidth
            onChange={(e) => setMessage(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="secondary" onClick={handleSendClick}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            // sx={{
            //   '& .MuiInputBase-root': {
            //     height: '100%',  // Set the height here
            //   },
            //   '& .MuiInputBase-input': {
            //     fontSize: '1.2rem',  // Increase the font size
            //   },
            // }}
          />
      </Grid>
    </Grid>
  )
};

export default Contact;