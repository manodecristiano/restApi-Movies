const { Router } = require('express');
const router = Router();

//GET
router.get('/index',(req,res) => {
  const data ={
    autor: 'Cristian',
    website: 'cristiancarreno.com'
  };
  res.json(data);
  })

  module.exports = router;