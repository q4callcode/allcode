const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/About', (req, res) => {
    res.render('about');
});

// router.get('/OurProcess', (req, res) => {
//     res.render('ourprocess');
// });

router.get('/OurWork', (req, res) => {
    res.render('ourwork');
});

// router.get('/Expertise', (req, res) => {
//     res.render('expertise');
// });

router.get('/Contact', (req, res) => {
    res.render('contact');
});


module.exports = router;
