import { GET_CV } from "../types/cvTypes";

const initialState = {
  cv: []
}

const cvReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CV:
      return { ...state, cv: payload.onecv }
    default:
      return state
  }
}

export default cvReducer
