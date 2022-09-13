import * as types from "./actionType";

// setting up initial state 
const initialState = {
  users: [],
  user: {},
  loading: true,
};

const usersReducers = (state = initialState, action) => {
    // using switch case for different action types 
  switch (action.type) {
    case types.GET_USERS:
        return {
          ...state,
          users: action.payload,
          loading: false,
        }
    case types.ADD_USER:
    default:
      return state;
  }
};

export default usersReducers;
