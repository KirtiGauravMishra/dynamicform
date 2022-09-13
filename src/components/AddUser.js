import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "react-datepicker";
import Navbar from './Navigation/Navmain';


const AddUser = () => {
     
    const [startDate, setStartDate] = useState(new Date());
   
    const [state, setState] = useState({
      name: "",
      email: "",
      fathersname: "",
      address: "",
      contact: "",
      gender: "",
      dob: "",
      country: ""

    });
    const [error, setError] = useState("");
    

   
    const { name, email, fathersname, address, contact, gender, dob, country } = state;

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
      };
      const history =useNavigate();
      const dispatch = useDispatch();
    

// handling errors while submitting
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !address || !email || !contact) {
          setError("Please input all input Field");
        } else {
          dispatch(addUser(state));
          history("/");
          setError("");
        }
      };




  return (
    <div>
        <Navbar />
      
    
      <h2><center>Add Students Detail</center></h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
    
      
      


        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >

  

<TextField
          id="outlined-basic"
          variant="outlined"
          label="Name"
          value={name}
          name="name"
          type="text"
          onChange={handleInputChange}
        />
        <br />

        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Email"
          value={email}
          name="email"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        
      <TextField
          id="outlined-basic"
          variant="outlined"
          label="Fathers Name"
          value={fathersname}
          name="fathersname"
          type="text"
          onChange={handleInputChange}
        />
        <br />
       
        
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Address"
          value={address}
          name="address"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Contact No."
          value={contact}
          name="contact"
          type="number"
          onChange={handleInputChange}
        />
        <br />


        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Gender"
          value={gender}
          name="gender"
          type="text"
          onChange={handleInputChange}
        />
        <br />

     

     

        <br />
        
         <TextField
         id="outlined-basic"
         variant="outlined"
         type= "date"
         name="dob"
         value={dob}
         onChange={handleInputChange}
         
         />
       
        
        <br />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Country"
          value={country}
          name="country"
          type="text"
          onChange={handleInputChange}
          
        />
        <br />
        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
          onSubmit={handleSubmit}

          
        >
          Submit
        </Button>
    

    </Box>
   
    </div>
  )
}

export default AddUser;