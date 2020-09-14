const pg = require('pg');

const dotenv = require('dotenv');

dotenv.config();

const databaseConfig = { connectionString: process.env.DATABASE_URL };
const pool = new pg.Pool(databaseConfig);

  const query = async (quertText, params = []) => {
    return new Promise((resolve, reject) => {
      pool.query(quertText, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  module.exports ={
    query
  };