import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";

const Signup = () => {
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === repassword) {
      if (email === "" || password === "") {
        toast.error("Invalid email or password");
        return;
      }
      axios.post("https://66f0f85341537919154f06e7.mockapi.io/signup", {
        num,
        email,
        password,
      });
      setNum("");
      setEmail("");
      setPassword("");
      setRepassword("");
      toast.success("Signup successful! Redirecting to login...");
      navigate("/Signin");
    } else {
      toast.warn("Passwords do not match");
    }
  };

  const DeleteData = (id) => {
    axios.delete(`https://66f0f85341537919154f06e7.mockapi.io/signup/${id}`);
    toast.info("User data deleted successfully");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="p-4 rounded shadow-lg bg-white"
        style={{
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 className="text-center mb-4 text-primary fw-bold">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Number" className="form-label text-muted">
              Mobile Number
            </label>
            <input
              type="number"
              className="form-control"
              id="Number"
              placeholder="Enter your mobile number"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-muted">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-muted">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="repassword" className="form-label text-muted">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="repassword"
              placeholder="Re-enter your password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between my-4">
            <button
              type="submit"
              className="btn btn-primary fw-bold px-4"
            >
              Sign Up
            </button>
            <button
              onClick={() => DeleteData(1)}
              type="button"
              className="btn btn-danger fw-bold px-4"
            >
              Delete
            </button>
          </div>
        </form>
        <p className="text-center text-muted mt-4 mb-0">
          Already have an account?{" "}
          <a
            href="/Signin"
            className="text-primary fw-bold text-decoration-none"
          >
            Login here
          </a>
        </p>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Container>
  );
};

export default Signup;
