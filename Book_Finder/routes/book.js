var express = require('express');
var router = express.Router();
const db = require("../db");

const {
    getAllBooks,
    getFirstName,
    getLastName,
    getBookId,
    getTitle

  } = require("../controller");

router.get('/all', async function(req, res, next) {
    const value = res.json(await getAllBooks(req.query.id));
    // res.json(rows);
});

router.get('/firstname', async function(req, res, next) {
    const value = res.json(await getFirstName(req.query.id));
    // res.json(rows);
});

router.get('/lastname', async function(req, res, next) {
    const value = res.json(await getLastName(req.query.id));
    // res.json(rows);
});

router.get('/title', async function(req, res, next) {
    const value = res.json(await getTitle(req.query.id));
    // res.json(rows);
});

router.get('/bookid', async function(req, res, next) {
    const value = res.json(await getBookId(req.query.id));
    // res.json(rows);
});


module.exports = router;
