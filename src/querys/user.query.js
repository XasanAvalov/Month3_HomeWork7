const {fetch, fetchOne} = require("../utils/pg");

const findOneQuery = "select * from users where id = ($1)"

module.exports = {
  find_one: async (id) => 
    await fetchOne(findOneQuery, id)
};