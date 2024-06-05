import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [date, setDate] = useState({});

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, date }));
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 p-5 bg-secondary text-white">
        <h2 className="text-center">Add new todo</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Todo Name:</label>
            <input
              placeholder="Enter todo here"
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="date">Todo Date:</label>
            <input
              type="date"
              name="date"
              className="form-control"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button className="btn btn-info mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
