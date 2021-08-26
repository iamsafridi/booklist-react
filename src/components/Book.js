import React from "react";
import "./book.css";

export const books = [
  {
    id: 1,
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2,
    title: "Our Class is a Family",
    author: "Shannon Olsen",
    img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
    title: "The Last Thing He Told Me: A Novel",
    author: "Laura Dave",
    img: "https://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 4,
    title: "It Ends with Us: A Novel",
    author: "Colleen Hoover",
    img: "https://images-na.ssl-images-amazon.com/images/I/71tqt4VL%2BdS._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 5,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    img: "https://images-na.ssl-images-amazon.com/images/I/71951W96oWL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 6,
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
  },
];

export const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
export default Book;
