import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
  }, []);

  return (
    <>
      <h1>Fares Book Store.</h1>
      <div className="books-container">
        {books.map((book) => {
          return (
            <div className="book" key={book.id}>
              <h3> {book.title}</h3>
              <p>{book.desc}</p>
              {book.cover && <img src={book.cover} alt="" />}
              <span>{book.price}</span>
            </div>
          );
        })}
        <Link to="/add">
          <button> Add a new book</button>
        </Link>
      </div>
    </>
  );
};

export default Books;
