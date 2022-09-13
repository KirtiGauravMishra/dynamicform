import * as types from "./actionType";
import axios from "axios";

// defining and dispatching my action 

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
  });

  // adding users
  const userAdded = () => ({
    type: types.ADD_USER,
  });

export const loadUsers = () => {
    return function (dispatch) {
      axios
      //get the data from  the environment variabe's API
        .get(`${process.env.REACT_APP_API}`)

        // handling tha api with .then
        .then((resp) => {
          console.log("resp", resp);
          dispatch(getUsers(resp.data));
        })
        // error handling 
        .catch((error) => console.log(error));
    };
  };
  

  export const addUser = (user) => {
    return function (dispatch) {
      axios
        .post(`${process.env.REACT_APP_API}`, user)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(userAdded());
          dispatch(loadUsers());
        })
        .catch((error) => console.log(error));
    };
  };