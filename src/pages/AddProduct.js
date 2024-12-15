import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddProduct = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageData, setImageData] = useState("");
  const [discription, setDiscription] = useState("");
  const [listingType, setListingType] = useState("others");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit button clicked");

    try {
      axios.post(`https://67346355a042ab85d119f3fa.mockapi.io/products`, {
        image,
        name,
        price,
        discription,
        listingType,
      });
    } catch (error) {
      console.log(error);
    }

    setName("");
    setPrice("");
    setImage("");
    setImageData("");
    setListingType("others");
    navigate("/");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageData(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImage(file.name);
    }
  };

  return (
    <div className="container w-50 m-auto vh-100 d-flex flex-column justify-content-center">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2 className="mt-3 mb-4">Add New Products</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        {imageData && (
          <img
            src={imageData}
            alt="Selected"
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
          />
        )}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
            required
            role="10"
            rows={10}
            cols={120}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Categories
          </label>
          <select
            className="form-control"
            id="category"
            value={listingType}
            onChange={(e) => setListingType(e.target.value)}
            required
          >
            <option value="Kitchen">Kitchen</option>
            <option value="Living Room">Living Room</option>
            <option value="Bedroom">Bedroom</option>
            <option value="kidsroom">Kids Room</option>
            <option value="chair">Chair</option>
            <option value="others">Others</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Listing
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
