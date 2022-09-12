import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
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
  