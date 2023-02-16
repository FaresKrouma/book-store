import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks();
  }, [books]);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BooksWrapper>
      <h1>Fares Book Store.</h1>
      <div className="books-container">
        {books.map((book) => {
          return (
            <div className="book" key={book.id}>
              <img src={book.cover} alt="book pic" />
              <h3> {book.title}</h3>
              <p>"{book.desc}"</p>
              <span>{book.price} €</span>
              <div className="btn-container">
                <button>Edit</button>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/add">
        <button> Add a new book</button>
      </Link>
    </BooksWrapper>
  );
};

export default Books;

const BooksWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 15px 10px;
  align-items: center;
  overflow: hidden;
  h1 {
  }
  .books-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 15px;
    .book {
      flex: 1;
      gap: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 250px;
        height: 400px;
        background-color: black;
        object-fit: cover;
        border-radius: 15px;
      }
      h3 {
        font-size: 2rem;
      }
      p {
        color: #888;
      }
      span {
        font-size: 15px;
      }
      .btn-container {
        display: flex;
        gap: 15px;
        button {
          padding: 2px 5px;
          font-size: 12px;
        }
      }
    }
  }
  button {
    font-size: 15px;
    padding: 2px 15px;
    font-weight: bold;
  }
`;
