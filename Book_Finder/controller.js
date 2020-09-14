const { errorMessage, successMessage, status } = require("./helpers/status");
const { isEmpty, empty } = require("./helpers/validations");

var moment = require("moment");
const db = require("./db");
const dbQuery = require("./db/dev/dbQuery");

const getAllBooks = async q => {
  const query = "SELECT * FROM public.books;";
  const { rows } = await dbQuery.query(query, []);
  return rows;
};

const getFirstName = async q => {
  const query =
    "SELECT * FROM public.books WHERE first_name ILIKE '%' || $1 || '%';";
  const { rows } = await dbQuery.query(query, [q]);
  return rows;
};

const getLastName = async q => {
  const query =
    "SELECT * FROM public.books WHERE last_name ILIKE '%' || $1 || '%';";
  const { rows } = await dbQuery.query(query, [q]);
  return rows;
};

const getBookId = async q => {
  const query = "SELECT * FROM public.books WHERE book_id = $1;";
  const { rows } = await dbQuery.query(query, [q]);
  return rows;
};

const getTitle = async q => {
  const query =
    "SELECT * FROM public.books WHERE title ILIKE '%' || $1 || '%';";
  const { rows } = await dbQuery.query(query, [q]);
  return rows;
};

const updateBooks = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }
  const { bookId } = req.params;
  const { book_id, first_name, last_name, title } = req.body;

  if (empty(book_id) || empty(first_name) || empty(last_name) || empty(title)) {
    errorMessage.error =
      "All fields are required || (book_id, first_name, last_name, title)";
    return res.status(status.bad).send(errorMessage);
  }

  const findBook = "SELECT * FROM books WHERE book_id=$1";
  const updateBooks = `UPDATE books
        SET first_name=$1,  last_name=$2,  title=$3 WHERE book_id= $4 returning *`;
  try {
    const { rows } = await dbQuery.query(findBook, [bookId]);
    const dbResponse = rows[0];
    console.log(dbResponse);
    if (!dbResponse) {
      errorMessage.error = "Book Cannot be found";
      return res.status(status.notfound).send(errorMessage);
    }
    const values = [first_name, last_name, title, book_id];
    const response = await dbQuery.query(updateBooks, values);
    const dbResult = response.rows[0];
    successMessage.data = dbResult;
    return res.status(status.success).send(successMessage);
  } catch (error) {
    console.log(error);
    errorMessage.error = "Operation was not successful";
    return res.status(status.error).send(errorMessage);
  }
};

const addSingleBook = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }
  const { book_id, first_name, last_name, title } = req.body;

  if (empty(book_id) || empty(first_name) || empty(last_name) || empty(title)) {
    errorMessage.error =
      "All fields are required || (book_id, first_name, last_name, title)";
    return res.status(status.bad).send(errorMessage);
  }

  const created_at = moment(new Date());
  const addBookQuery = `INSERT INTO
          books(first_name, last_name, title, book_id, created_at)
          VALUES($1, $2, $3, $4, $5)
          returning *`;
  const values = [first_name, last_name, title, book_id, created_at];

  try {
    const { rows } = await dbQuery.query(addBookQuery, values);
    const dbResponse = rows[0];
    successMessage.data = dbResponse;
    return res.status(status.created).send(successMessage);
  } catch (error) {
    if (error.routine === "_bt_check_unique") {
      errorMessage.error = "Book already exists with given bookId";
      return res.status(status.conflict).send(errorMessage);
    }
    console.log(error)
    errorMessage.error = "Unable to create booking";
    return res.status(status.error).send(errorMessage);
  }
};

module.exports = {
  getAllBooks,
  getFirstName,
  getLastName,
  getBookId,
  getTitle,
  updateBooks,
  addSingleBook
};
