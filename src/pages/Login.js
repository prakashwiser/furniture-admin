"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [apiData, setApiData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://66f0f85341537919154f06e7.mockapi.io/signup")
      .then((response) => {
        setApiData(response.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email: ", email);
    console.log("password: ", password);

    if (email) {
      if (password) {
        let EmailData = apiData.filter((items) => items.email == email);
        console.log("db true");
        if (EmailData.length === 0) {
          alert("can't see your email, pls register first");
          navigate("/Signup");
        } else {
          if (password == EmailData[0]?.password) {
            alert("login successfully");
            navigate("/Products");
          } else {
            alert("please enter correct password");
          }
        }
      } else {
        alert("please fill the password");
      }
    } else {
      alert("please fill the email");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
      <a href="https://github.com/prakashwiser/"></a>
      <h1 className="fw-bold text-success py-4">Sign in</h1>
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button type="submit" className="btn btn-primary fw-bold">
            Sign in
          </button>
          <Link to={"/UpdatePassword"} className="btn btn-primary fw-bold">
            Forget Password
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
