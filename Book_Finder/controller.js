const db = require("./db");



const getAllBooks = async (q) => {
    // console.log("running get all Toxin Function");
    const query = "SELECT * FROM public.books;";
    const rows = await db.runSelectQuery(query, []);
    return rows;
  };

  const getFirstName = async (q) => {
    // console.log("running get all Toxin Function");
    const query = "SELECT * FROM public.books WHERE first_name ILIKE '%' || $1 || '%';";
    const rows = await db.runSelectQuery(query, [q]);
    return rows;
  };

  const getLastName = async (q) => {
    // console.log("running get all Toxin Function");
    const query = "SELECT * FROM public.books WHERE last_name ILIKE '%' || $1 || '%';";
    const rows = await db.runSelectQuery(query, [q]);
    return rows;
  };

  const getBookId = async (q) => {
    // console.log("running get all Toxin Function");
    const query = "SELECT * FROM public.books WHERE book_id = $1;";
    const rows = await db.runSelectQuery(query, [q]);
    return rows;
  };

  const getTitle = async (q) => {
    // console.log("running get all Toxin Function");
    const query = "SELECT * FROM public.books WHERE title ILIKE '%' || $1 || '%';";
    const rows = await db.runSelectQuery(query, [q]);
    return rows;
  };


  module.exports = {
    getAllBooks,
    getFirstName,
    getLastName,
    getBookId,
    getTitle
  };
  