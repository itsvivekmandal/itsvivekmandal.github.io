import apiService from "../api/apiService";
import { Grid, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { Snackbar, Slide, Alert } from '@mui/material';

function SlideTransition(props) {
  return <Slide {...props} direction="left" />; 
}

const Contact = () => {
  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('warning');
  const [mailStatus, setMailStatus] = useState(null);

  const vertical = 'bottom';
  const horizontal = 'right'; 

  const handleClick = async () => {
    const templateParams = {
      message: message,
    };

    try {      
      const result = await apiService.sendMail(templateParams);
      if(result.status === 200) setSeverity('success');
      else setSeverity('error');
  
      setMailStatus(result.data.message);
    } catch (error) {
      setSeverity('error');
      setMailStatus('Failed to send mail!');
    }

    // try {

      // const response = await fetch('http://127.0.0.1:8080/send_email', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(templateParams),
      // });
      
      // if (!response.ok) {
      //   setSeverity('error');
      //   setMailStatus('Failed to send mail!');
      // } else {
      //   setSeverity('success');
      //   setMailStatus('Mail sent successfully.');
      // }

    // } catch (error) {
    //   setSeverity('error');
    //   setMailStatus('Failed to send mail!');
    // }

    setOpen(true);
    //clear the input field
    setMessage('');
  };

  const handleClose = () => {
    setOpen(false);
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="secondary" onClick={handleClick}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={3000}
            TransitionComponent={SlideTransition}
            onClose={handleClose}
            message={message}
            severity="success"
            key={vertical + horizontal}
          >
            <Alert onClose={handleClose} severity={severity} 
              sx={{ 
                width: '100%', 
                fontSize: '18px',
                height: '50px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {mailStatus}
            </Alert>
          </Snackbar>
      </Grid>
    </Grid>
  )
};

export default Contact;