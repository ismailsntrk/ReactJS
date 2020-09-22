import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../redux/actions/actionTypes";

function Deneme() {
  const counter = useSelector((state) => state.databaseReducer.counter);
  const dispatch = useDispatch();

  const data = () => {
    dispatch({ type: "GET_DATA_SUCCESS" });
  };

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={data}>asdas</button>
    </div>
  );
}

export default Deneme;
