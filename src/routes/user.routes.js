const {Router} = require("express");

const { get_one } = require("../controllers/user.controller");

const router = Router();

router.get("/get_one/user/:id", get_one);

module.exports = router;