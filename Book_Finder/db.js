const pg = require('pg');

const connectionString = ''
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
  