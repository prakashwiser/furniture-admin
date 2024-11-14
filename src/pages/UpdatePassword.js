import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function UpdatePassword() {
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const navigate = useNavigate()

  const HandleSubmit = () => {};
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="fw-bold text-danger">Reset Password</h1>
      <form className="w-25 w_100 mt-3">
        <div class="form-group py-3">
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter  Number"
            required
            onChange={(e) => setNum(e.target.value)}
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>{" "}
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>{" "}
        <div class="form-group py-3">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>{" "}
        <div class="form-group py-2">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Conform Password"
            required
            onChange={(e) => setRepassword(e.target.value)}
          />
        </div>
        <div className="text-center py-4">
          <button
            type="submit"
            class="btn btn-success fw-bold"
            onClick={HandleSubmit}
          >
            Signup
          </button>{" "}
        </div>
      </form>
    </div>
  );
}
export default UpdatePassword;
