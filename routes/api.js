const express = require("express");
const router = express.Router();
const testActions = require("../actions/api/test");

router.get("/", testActions.homepage);
router.get("/kontakt", testActions.kontakt);

module.exports = router;
