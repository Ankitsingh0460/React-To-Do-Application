import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

function Home() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(
      deleteUser({
        id: id,
      })
    );
  };

  console.log(users);
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center mt-4">
          <Link to="/create" className="btn btn-success my-3">
            Create +
          </Link>
        </div>
        <table className="table mt-4 ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.date}</td>
                <td>
                  <Link
                    to={`/edit/${user.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-sm btn-danger ms-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
