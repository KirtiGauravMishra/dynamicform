import React,{useEffect} from 'react' ;
// below is the import for table from material UI
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { loadUsers } from '../redux/actions';
import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';
import "./component.css";
import Navigation from './Navbar';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { useSelector,useDispatch } from 'react-redux';
//useSelector and Dispatch are set of hooks to use as alternatives to the
// existing connect() higher-order component. 



// importing table from material ui table 
  

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  


  const useStyles = makeStyles({
    table: {
      marginTop: 100,
      minWidth: 700,
    },
  });
  

  // table content of material Ui -> inside our hoome component 

const Home = () => {
    const classes = useStyles();
   
    let dispatch = useDispatch();
    // to get the state from redux store we use use selector 
    // destructuring the users from state.data from root-reducer
    const { users } = useSelector((state) => state.data); 

    

    useEffect(() => {
      dispatch(loadUsers());
    }, []);

  return (
    <div>
        <Navigation /> 
     
       <TableContainer component={Paper}>
      <Table className={classes.table} sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
        <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Fathers Name</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Gender</StyledTableCell>
              <StyledTableCell align="center">DOB</StyledTableCell>
              <StyledTableCell align="center">Country</StyledTableCell>
             
            </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user.name}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.fathername}</StyledTableCell>
              <StyledTableCell align="center">{user.address}</StyledTableCell>
              <StyledTableCell align="center">{user.contact}</StyledTableCell>
              <StyledTableCell align="center">{user.gender}</StyledTableCell>
              <StyledTableCell align="center">{user.dob}</StyledTableCell>
              <StyledTableCell align="center">{user.country}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default Home ;