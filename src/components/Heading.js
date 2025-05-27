import {Typography} from "@mui/material";

const Heading = ({name}) => {
  return (
    <Typography 
      gutterBottom
      variant="h4"
      sx={{textDecoration: "underline", textDecorationColor: "#9c27b0", textUnderlineOffset: "10px"}}
      padding={"15px 20px"}
    >
      {name}  
    </Typography>
  );
};

export default Heading;