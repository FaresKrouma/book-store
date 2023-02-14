import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: "",
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/books", book);
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(book);
  return (
    <form>
      <h2>add new book</h2>
      <input
        type="text"
        onChange={handleChange}
        placeholder="title"
        name="title"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="description"
        name="desc"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="price"
        name="price"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="cover"
        name="cover"
      />
      <button onClick={handleSubmit}>submit book</button>
    </form>
  );
};

export default Add;
