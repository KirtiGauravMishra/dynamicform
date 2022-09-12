import React from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";





const buttonStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(2),
      

      },
    },
  }));

const Navigation = () => {

    let history = useNavigate();
  return (
    
    <div className={buttonStyles.root}>
        
       
        <Button
           variant="contained"
           color="primary"
           onClick={() => history("/addUser")}
    
        >
         Register Students 
        </Button>

    </div>


  )
}

export default Navigation;