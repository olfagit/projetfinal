import { CURRENT, DELETE, EDIT, LOGIN, LOGOUT, REGISTER } from "../types/userTypes";

const initialState = {
    client: {}
  }
  
  const userReducers = (state = initialState, { type, payload }) => {
    switch (type) {
      case REGISTER:
        localStorage.setItem("token", payload.token);
        return { ...state, client: payload.clients };
      case LOGIN:
        localStorage.setItem("token", payload.token);
        return { ...state, client: payload.clients };
      case CURRENT:
        return { ...state, client: payload.client };
      case LOGOUT:
        case DELETE:
        localStorage.removeItem("token");
        return { ...state, client: null };
      case EDIT:
        return{...state,user:payload.client}
      default:
        return state;
    }
  };
  export default userReducers;