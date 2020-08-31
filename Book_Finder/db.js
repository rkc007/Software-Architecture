const pg = require('pg');

const connectionString = 'postgres://postgres:SLUbook!1@bookfinder.c81m81drtua2.us-east-1.rds.amazonaws.com:5432/postgres'
    const runSelectQuery = async (queryhere, params = []) => {

        this.pool = new pg.Pool({
            connectionString,
          });
    let response = [];
    try {
      const { rows } = await this.pool.query(queryhere, params);
      response = rows;
    } catch (error) {
      console.log(error);
      this.logger.error(error);
      this.notifyOnError(query, params, error);
    } finally {
      // clientn.release();
    }

    return response;
  }

  module.exports = {
    runSelectQuery
  };
  