import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from './pages/Signup';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<AddProduct />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  </Router>
  );
}

export default App;
