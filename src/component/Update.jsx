import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existuser = users.filter((fe) => fe.id == id);
  const { name, date } = existuser[0];
  const [updateName, setUpdateName] = useState(name);
  const [updateDate, setUpdateDate] = useState(date);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: updateName,
        date: updateDate,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 p-5 bg-secondary text-white">
          <h2 className="text-center">Update Todo</h2>
          <form onSubmit={handleUpdate}>
            <div>
              <label htmlFor="name">Todo Name:</label>
              <input
                placeholder="Enter todo here"
                type="text"
                name="name"
                className="form-control"
                value={updateName}
                onChange={(eve) => setUpdateName(eve.target.value)}
              />
            </div>
            <div>
              <label htmlFor="date">Todo Date:</label>
              <input
                type="date"
                name="date"
                className="form-control"
                value={updateDate}
                onChange={(eve) => setUpdateDate(eve.target.value)}
              />
            </div>
            <button className="btn btn-info mt-2">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;
