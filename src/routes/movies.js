const { Router } = require('express');
const router = Router();

const movies = require("../assets/movies.json");



router.get('/movies',(req,res) => {
    res.json(movies);
  })

  module.exports = router;