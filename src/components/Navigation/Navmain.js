import React from 'react'
import Navigation from '../Navbar';
import Button from "@material-ui/core/Button";



import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './Navbarelements';
const Navbar = () => {



  return (
   <div className= "Navbari">
  
   <Nav>
        <Bars />
  
        <NavMenu>
    <NavLink exact className="active_class" to = "/addUser">
     {Navigation}
    </NavLink>
    <NavLink exact className="active_class" to = "/">

    <Button
           variant="contained"
           color="secondary"
    
        >
         View Students 
        </Button>
  
    </NavLink>
   
   
    </NavMenu>

    </Nav>
    
      
    </div>
  )
}

export default Navbar;



