const { Router } = require('express');
const router = Router();

const movies = require("../assets/movies.json");

//GET
router.get('/movies',(req,res)=>{
  res.json(movies);
});

//POST
router.post('/movies',(req,res) => {
    console.log(req.body);
    


const {adult,backdrop_path,genre_ids,
  original_language,original_title,overview,
  popularity,poster_path,release_date,
  title,video,vote_average,vote_count} = req.body;

  
  if( adult&&backdrop_path&&genre_ids&&
  original_language&&original_title&&overview,
  popularity&&poster_path&&release_date,
  title&&video&&vote_average&&vote_count){

    const id= movies.length + 1;
    const newMovie = {...req.body,id};

    movies.push(newMovie);

    res.send('guardado');

  }else{
    res.status(500).json({error:'There was an error'});
    
  }


  })


  module.exports = router;