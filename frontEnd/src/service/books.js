import axios from "axios";

const basePathBooks = axios.create({baseURL: "http://localhost:8000/books"})

function getAllBooks() {
  const response = basePathBooks.getAllBooks('/books')
  return response.data
}

export {
  getAllBooks,
}