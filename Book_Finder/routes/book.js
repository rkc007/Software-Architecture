var express = require('express');
var router = express.Router();
const db = require("../db");

const {
    getAllBooks,
    getFirstName,
    getLastName,
    getBookId,
    getTitle,
    updateBooks,
    addSingleBook

  } = require("../controller");

router.get('/all', async function(req, res, next) {
    const value = res.json(await getAllBooks(req.query.id));
});

router.get('/firstname', async function(req, res, next) {
    const value = res.json(await getFirstName(req.query.id));
});

router.get('/lastname', async function(req, res, next) {
    const value = res.json(await getLastName(req.query.id));
});

router.get('/title', async function(req, res, next) {
    const value = res.json(await getTitle(req.query.id));
});

router.get('/bookid', async function(req, res, next) {
    const value = res.json(await getBookId(req.query.id));
});

router.put('/update/books/:bookId', async function(req, res, next) {
    return await updateBooks(req,res);
});

router.post('/add/single/newbook', async function(req, res, next) {
    return await addSingleBook(req,res);
});

module.exports = router;
