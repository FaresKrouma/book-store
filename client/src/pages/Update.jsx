import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: null,
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const location = useLocation();
  const navigate = useNavigate();
  const bookId = location.pathname.split("/")[2];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/books/${bookId}`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <FormWrapper>
      <h2>Edit Book</h2>
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="title"
          name="title"
          autoComplete="off"
        />
        <textarea
          type="text"
          onChange={handleChange}
          placeholder="description"
          name="desc"
          autoComplete="off"
          rows="1"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="price"
          name="price"
          autoComplete="off"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="cover"
          name="cover"
          autoComplete="off"
        />
        <button onClick={handleSubmit}>Confirm Details</button>
      </form>
    </FormWrapper>
  );
};

export default Update;

const FormWrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
  h2 {
    align-self: center;
    border-bottom: 2px solid #222;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;
    margin: 10px 15px;
    textarea {
      resize: vertical;
      border: none;
      border-bottom: 1px solid #888;
      text-align: center;
      padding: 8px;
      font-size: 15px;
      :focus {
        outline: none;
        border-bottom: 2px solid black;
      }
      ::placeholder {
        font-size: 12px;
        text-align: center;
        font-family: inherit;
        text-transform: capitalize;
      }
    }
    input {
      border: none;
      border-bottom: 1px solid #888;
      text-align: center;
      padding: 8px;
      font-size: 15px;
      flex: 1;
      :focus {
        outline: none;
        border-bottom: 2px solid black;
      }
      ::placeholder {
        font-size: 12px;
        text-transform: capitalize;
      }
    }
    button {
      padding: 2px 5px;
      font-size: 14px;
      align-self: center;
    }
  }
`;
