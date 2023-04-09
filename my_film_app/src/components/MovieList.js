import React from "react";
import{Link} from 'react-router-dom';
const MovieList=(props)=>{

  const truncateString=(string,MaxLenght)=>{
    if(!string) return null;
    if(string<MaxLenght) return string;
    return `${string.substring(0,MaxLenght)}...`
  
  }
    
    
return(

  <div className="row">

{props.movies.map((movie,i)=>( <div className="col-lg-4" key={i}>
        <div className="card" style={{marginBottom:"20px"}}>
            <img src={movie.imageURL} className="card-img-tab" alt="sample Movie"/>
            <div className="card-body" >
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">{truncateString(movie.overview,100)}</p>
                <div className="d-flex justify-content-between align-items-center">
                <Link to={`edit/${movie.id}`} type="button" className="btn btn-md btn-outline-warning">Edit</Link> 
                    <button type="button" onClick={(event)=>props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                    <h2><span className="badge bg-info">{movie.rating}</span></h2>
                   
                    
                </div>
            </div>
        </div>

    </div>))}

   
  </div>
);


}

export default MovieList;