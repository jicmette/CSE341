const router = require("express").Router();

router.use("/contacts", require("./contactsRoutes"));

module.exports = router;
