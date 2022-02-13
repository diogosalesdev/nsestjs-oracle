/* eslint-disable @typescript-eslint/no-var-requires */
const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export const getResSuc = async () => {
  return oracledb
    .getConnection({
      user: USER,
      password: PASSWORD,
      connectString: CONNECT_STRING,
    })
    .then(function (connection) {
      const OracleQry = '';
      return connection
        .execute(OracleQry, [], { resultset: false })
        .then(function (result) {
          connection.close();
          return result.rows;
        })
        .catch(function (err) {
          connection.close();
          throw new Error(err.message);
        });
    });
};
