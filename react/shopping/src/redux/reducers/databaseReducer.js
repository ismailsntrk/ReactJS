
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  counter : 0
}

export default function databaseReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case actionTypes.GET_DATA_SUCCESS:
      return  {counter : state.counter  + 1};

    default:
      return state;
  }
}
