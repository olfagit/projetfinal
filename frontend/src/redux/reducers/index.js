
import userReducers from "./userReducers"
import cvReducer from "./cvReducers"
import { combineReducers } from "redux"
import ErrorReducer from "./ErrorReducer"

const rootreducer = combineReducers({ ErrorReducer,userReducers,cvReducer });

export default rootreducer;