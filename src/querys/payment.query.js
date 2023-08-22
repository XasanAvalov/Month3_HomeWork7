const {fetchOne} = require("../utils/pg");

const findOneQuery = "select * from users where id = ($1)"

const increaseBalanceQuery =
  "update users set balance = balance + $2 where id = $1";

const decreaseBalanceQuery =
  "update users set balance = balance - $2 where id = $1";

const createTransactionQuery =
  "insert into transactions(from_id, to_id, quantity)values($1, $2, $3)";

module.exports = {
decreaseBalance: async (from_id, quantity) =>
    await fetchOne(decreaseBalanceQuery, from_id, quantity),
increaseBalance: async (to_id, quantity) =>
    await fetchOne(increaseBalanceQuery, to_id, quantity),
createTransaction: async (from_id, quantity, to_id) =>
    await fetchOne(createTransactionQuery, from_id, to_id, quantity),
find_one: async (from_id) => 
    await fetchOne(findOneQuery, from_id),
beginTransaction: async () => 
    await fetchOne("BEGIN TRANSACTION"),
rollBackTransaction: async () => 
    await fetchOne("ROLLBACK"),
commitTransaction: async () =>
    await fetchOne("COMMIT"),
  
};

