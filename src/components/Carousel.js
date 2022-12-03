import React from "react";

function Carousel() {

    return(<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="..." alt="..."/>
        <h1>Slide one</h1>
      </div>
      <div class="carousel-item">
        <img src="..." alt="..."/>
        <h1>Slide Three</h1>
      </div>
      <div class="carousel-item">
        <img src="..." alt="..."/>
        <h2>Slide two</h2>
      </div>
      <div class="carousel-item">
        <img src="..." alt="..."/>
        <h2>Slide two</h2>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="false"></span>
      {/* <span class="sr-only">Previous</span> */}
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="false"></span>
      {/* <span class="sr-only">Next</span> */}
    </button>
  </div>)



}

export default Carousel