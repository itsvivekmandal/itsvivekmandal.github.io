import apiService from "../api/apiService";
import { Grid, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useState } from "react";
import { Snackbar, Slide, Alert } from '@mui/material';
import Heading from './Heading';

function SlideTransition(props) {
    return <Slide {...props} direction="left" />; 
}

const Contact = () => {
    // Initialize the hook
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [message, setMessage] = useState('');

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('warning');
    const [mailStatus, setMailStatus] = useState(null);

    const vertical = 'bottom';
    const horizontal = 'right'; 

    const handleClick = async () => {
        // Security Check: Ensure reCAPTCHA is ready
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }

        
        try {      
            // Generate the token
            const token = await executeRecaptcha('contact_me');
            const templateParams = {
                message: message,
                recaptchaToken: token // Send this to your backend for verification
            };
            
            const result = await apiService.sendMail(templateParams);
            if(result.status === 200) setSeverity('success');
            else setSeverity('error');
        
            setMailStatus(result.data.message);
        } catch (error) {
            setSeverity('error');
            setMailStatus('Failed to send mail!');
        }

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
            <Heading name="Contact Me" />
            <TextField 
                label="Write a message for me" 
                color="primary" 
                variant="standard" 
                multiline 
                maxRows={4} 
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton color="primary" onClick={handleClick}>
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