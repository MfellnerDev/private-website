/**
 * Router for the "normal" website part of the app
 */
const express = require('express');
const router = express.Router();

const appController = require("../controller/appController");

/* GET home page. */
router.get('/', appController.index);

router.get('/projects', appController.projects);


router.get('/contact', appController.contact);

module.exports = router;
