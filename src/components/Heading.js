import {Typography} from "@mui/material";
import { useTheme } from '@mui/material/styles';

const Heading = ({name}) => {
  const theme = useTheme();
  
  return (
    <Typography 
      gutterBottom
      variant="h4"
      sx={{textDecoration: "underline", textDecorationColor: theme.palette.secondary.main, textUnderlineOffset: "10px"}}
      padding={"15px 20px"}
    >
      {name}  
    </Typography>
  );
};

export default Heading;