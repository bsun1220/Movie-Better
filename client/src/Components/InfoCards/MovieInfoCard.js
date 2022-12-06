import React from "react";
//Whenever we need to display a movie and all of its information
export default function MovieInfoCard(prop){
    return(
        <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{prop.title}</span>
              <p>Year Produced : {prop.year}</p>
              <p>Length (Minutes) : {prop.length}</p>
              <p>Rating : {prop.rating}</p>
            <p>Votes : {prop.votes}</p>
            </div>
          </div>
        </div>
      </div>
        // <div className = "card">
        //     <h1>{prop.title}</h1>
        //     <hr/>
        //     <p>Year Produced : {prop.year}</p>
        //     <p>Length (Minutes) : {prop.length}</p>
        //     <p>Rating : {prop.rating}</p>
        //     <p>Votes : {prop.votes}</p>
        // </div>

    )
}
