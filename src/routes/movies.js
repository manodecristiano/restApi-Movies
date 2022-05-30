const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const movies = require("../assets/movies2.json");


//GET
router.get('/',(req,res)=>{
  res.json(movies);
});


//POST
router.post('/',(req,res) => {
    console.log(req.body);
  
/*const {adult,backdrop_path,genre_ids,
  original_language,original_title,overview,
  popularity,poster_path,release_date,
  title,video,vote_average,vote_count} = req.body;
*/
const {title, age, gender, language}= req.body;
  
if(title&&age&&gender&&language){
  /*if( adult&&backdrop_path&&genre_ids&&
  original_language&&original_title&&overview,
  popularity&&poster_path&&release_date,
  title&&video&&vote_average&&vote_count){
*/

    const id= movies.length + 1;
    const newMovie = {...req.body,id};

    movies.push(newMovie);

    res.send('guardado');

  }else{
    res.status(500).json({error:'There was an error'});
    
  }


  })


//PUT
router.put('/:id',(req,res)=>{

  const {title, age, gender, language} = req.body;
  console.log("id--> "+req.params.id);

  if(title&&age&&gender&&language){

   
    movies.forEach(movie=>{
      
      console.log('movie.id--> '+movie.id);

      if(movie.id==req.params.id){
        console.log('cambio!');
        movie.title=title;
        movie.age=age;
        movie.gender=gender;
        movie.language=language;
      }
     
    });

    res.json(movies);

  }else{
    res.status(500).json({error:'There was an error.'});
  }
})






//DELETE
  router.delete('/:id',(req,res)=> {

    console.log(req.params);
 
    let position=0;

    movies.forEach((movie) => {
      
      if (movie.id == req.params.id) {   
        console.log('position en el array--> '+position);
        movies.splice(position,1);
     
        console.log('Pelicula borrada--> '+movie.id);
      }else{
        console.log('NO borra a id '+movie.id);
      }
      position++ 
    });
    res.send(movies);
  });
  
     
  
   
  


   /* movies.findById(idRequest,(err, movie)=>{
      if(err) res.status(500).send({message:`Error al borrar la pelicula: ${err}`})

      movie.remove(err =>{
        if(err) res.status(500).send({message:`Error al borrar la pelicula: ${err}`}),
        res.status(200).send({message:`El producto ha sido eliminado`})
      })
    })



  })
  */
    

  module.exports = router;


 