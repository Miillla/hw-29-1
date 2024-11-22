import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count > 0) {
      setMessage("Лічильник позитивний!");
    } else if (count < 0) {
      setMessage("Лічильник негативний!");
    } else {
      setMessage("Лічильник на нулі.");
    }
  }, [count]);

  return (
    <div className="text-center mt-5">
      <h1 className="mb-4">Лічильник: {count}</h1>

      <div className="btn-group">
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-danger"
        >
          -
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-success"
        >
          +
        </button>
      </div>

      <p className="mt-3 alert ">{message}</p>
    </div>
  );
};
export default Counter;
