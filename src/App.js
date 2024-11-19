import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import UpdatePro from "./pages/UpdatePro";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/UpdatePro/:id" element={<UpdatePro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
