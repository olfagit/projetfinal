import axios from "axios";
import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER ,DELETE, EDIT} from "../types/userTypes";
import { alert_error } from "./errorAction";

export const register = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/client/register", data);
    dispatch({ type: REGISTER, payload: res.data });
    navigate("/Profile");
  } catch (error) {
    error.response.data.erros.forEach((el) => {
      dispatch(alert_error(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
}

export const login = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/client/login", data);
    dispatch({ type: LOGIN, payload: res.data });
    navigate("/profile");
  } catch (error) {
    error.response.data.erros.forEach((el) => {
      dispatch(alert_error(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
}

export const get_current = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/client/current", config);
    dispatch({ type: CURRENT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
}

export const delet = (id) => async (dispatch) => {
  try {
    await axios.delete(`/client/delclient/${id}`);
    dispatch({type:DELETE});
  } catch (error) {
    console.log(error);
  }
}

export const edit = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/client//edit/${id}`, data);
    dispatch({type:EDIT , payload:data , id});
  } catch (error) {
    console.log(error);
  }
}

export const logout = () => {
    return { type: LOGOUT };
}