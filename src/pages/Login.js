import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Container } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://66f0f85341537919154f06e7.mockapi.io/signup")
      .then((response) => {
        setApiData(response.data);
      });
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    const { email, password } = values;
    let EmailData = apiData.filter((items) => items.email === email);

    if (EmailData.length === 0) {
      toast.error("Email not found, please register first");
      navigate("/Signup");
    } else {
      if (password === EmailData[0]?.password) {
        toast.success("Login successful");
        sessionStorage.setItem("userData", JSON.stringify(EmailData[0]));
        navigate("/");
      } else {
        toast.warning("Incorrect password");
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="p-4 rounded shadow-lg"
        style={{
          maxWidth: "400px",
          width: "100%",
          background: "#fff",
        }}
      >
        <h2 className="text-center mb-4 text-primary">Welcome Back</h2>
        <p className="text-center text-muted mb-4">
          Please sign in to your account.
        </p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label className="form-label text-muted">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-muted">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="text-center text-muted mt-4 mb-0">
          Don’t have an account?{" "}
          <Link to="/Signup" className="text-primary fw-bold">
            Sign up here
          </Link>
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

export default Login;
