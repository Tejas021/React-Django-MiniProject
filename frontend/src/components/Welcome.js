import React from 'react'

const Welcome = () => {
    return (
        <div>
              
    

       <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/800x200" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className='mt-5 md-2'>Welcome to StudEval</h1>
      <h6>A convenient way for teachers and students to manage their their data and get also to get a self generated evaluation of the same</h6>
      
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <h6>Some representative placeholder content for the second slide.</h6>
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <h6>Some representative placeholder content for the third slide.</h6>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

{/* <h3 style={{textAlign:'left'}} className='mt-3'>Team:</h3>

<div className='container mt-3'><div className='row'>
    
<div className="card col-md-4" style={{width: "33.33%"}}>
  <img src="https://source.unsplash.com/random/300x200" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
  </div>
</div>
<div className="card col-md-4" style={{width: "33.33%"}}>
  <img src="https://source.unsplash.com/random/300x200" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
  </div>
</div>
<div className="card col-md-4" style={{width: "33.33%"}}>
  <img src="https://source.unsplash.com/random/300x200" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
  </div>
</div>

    
    </div></div> */}
<div class="container-fluid connect bg-light text-dark mb-3">
	<div class="row padding text-center">
		<div class="col-12">
<h2>Connect</h2>
		</div>
<div class="col-12 social padding">
	<a href="https://www.facebook.com/tejas.kolwankar"><i class="fab fa-facebook"></i></a>
	<a href="https://twitter.com/KolwankarTejas"><i class="fab fa-twitter"></i></a>
	<a href="tejaskowlankar021@gmail.com"><i class="fab fa-google-plus-g"></i></a>
	<a href="https://www.instagram.com/tej_k_021/" ><i class="fab fa-instagram"></i></a>
	<a href="#" ><i class="fab fa-youtube"></i></a>
</div>

	</div>
</div>



<footer class="container-fluid padding ">
	<div class="row padding text-center">
    <div class="col-md-4">

<h3>StudEval</h3>
<hr class="light"/>
      <h6>952-710-5923</h6>
      <h6>305,Jairaj co.op</h6>
      <h6>100 ft road.</h6>
    </div>

    <div class="col-md-4">

<h4>Our Help</h4>
<hr class="light"/>
      <h6>952-710-5923</h6>
      <h6>305,Jairaj co.op</h6>
      <h6>100 ft road.</h6>
    </div>

    <div class="col-md-4">

<h4>Welcome</h4>
<hr class="light"/>
<h6>952-710-5923</h6>
<h6>305,Jairaj co.op</h6>
<h6>100 ft road.</h6>
    </div>
<hr class="light-100"/>
    <div class="col-12">
	<h5>&copy;StudEval</h5>
    </div>


	</div>
</footer>


        </div>
    )
}

export default Welcome