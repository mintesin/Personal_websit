import React from "react";


function Card(props) {

  return (
    <div className=" pro-cards">


      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h1>{props.name}</h1>
          </div>
          <div class="flip-card-back">

            <p>{props.techStack}</p>
            <p>{props.link}</p>
          </div>

        </div>



      </div></div>
  )



}

export default Card 