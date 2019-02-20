import { handleActions } from "redux-actions";
import { SELECT_TYPE } from "./actions";

const initialState = {
  type: 0,
}

export default handleActions({
  [SELECT_TYPE]: (state, { data }) => ({
      type: data,
  }),
}, initialState );