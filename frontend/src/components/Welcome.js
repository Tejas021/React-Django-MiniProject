import React from 'react'
import {Link} from 'react-router-dom'
const Welcome = () => {
    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="mx-3 navbar-brand" href="/"><h3>StudEval</h3></a>
      
  
    </nav>
    

       <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://source.unsplash.com/800x200" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1 className='mt-5 md-2'>Welcome to StudEval</h1>
      <h6>A convenient way for teachers and students to manage their their data and get also to get a self generated evaluation of the same</h6>
      <Link to="/login" className="btn btn-outline-success m-2">Sign In</Link>
       <Link to="/signup" className="btn btn-success m-2">Sign up</Link>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<h3 style={{textAlign:'left'}} className='mt-3'>Team:</h3>

<div className='container mt-3'><div className='row'>
    
<div class="card col-md-4" style={{width: "33.33%"}}>
  <img src="https://source.unsplash.com/random/300x200" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card col-md-4" style={{width: "33.33%"}}>
  <img src="https://source.unsplash.com/random/300x200" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card col-md-4" style={{width: "33.33%"}}>
  <img src="https://source.unsplash.com/random/300x200" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

    
    </div></div>




        </div>
    )
}

export default Welcome