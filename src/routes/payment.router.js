const { Router } = require("express");

const {create_payment} = require("../controllers/payment.controller");
const isUser = require("../middleware.js/isUser");

const router = Router();

router.post("/transaction", isUser, create_payment);

module.exports = router;