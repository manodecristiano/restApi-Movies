const { Router } = require('express');
const router = Router();

//GET
router.get('/index',(req,res) => {
    res.json({"Title":"Hello World"});
  })

  module.exports = router;