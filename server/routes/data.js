const express = require("express");
const router  = express.Router();

const { getAllData, getDataByPage, allCountry, allItems, addData } = require("../controllers/data");
const isLoggedIn = require("../middleware/isLoggedIn");


router.route("/getAlldata" ).get(isLoggedIn,getAllData);
router.route("/country" ).get(isLoggedIn,allCountry);

router.route("/getDataByPage" ).get(isLoggedIn,getDataByPage);
router.route("/getuniqueitem/:item" ).get(isLoggedIn,allItems);

router.route("/addData" ).post(isLoggedIn,addData);


module.exports = router;