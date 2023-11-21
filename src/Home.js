import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerLogo from './assets/banner.png';
import imglogo from './assets/group.jpg';
import iconimg from './assets/gear.png';
import right from './assets/right.jpg';
import Slider from  'react-slick';
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,

  }
  return (
    <div>
      <>
      <div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={bannerLogo} className="d-block w-100" alt="BigCo Inc. logo" />
    </div>
    <div className="carousel-item">
    <img src={bannerLogo} className="d-block w-100" alt="BigCo Inc. logo" />
  
    </div>
    <div className="carousel-item">
    <img src={bannerLogo} className="d-block w-100" alt="BigCo Inc. logo" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



<section className="counter">
  <div className="container">
    <div className="row">
      <div className="col-md-4 text-center">
        <div className='conter-area'>
            <h3>1000+</h3>
            <p>Curated Messages</p>
        </div>
      </div>
      <div className="col-md-4 text-center">
      <div className='conter-area'>
            <h3>10+</h3>
            <p>Emotions</p>
        </div>
      </div>
      <div className="col-md-4 text-center">
      <div className='conter-area'>
            <h3>100+</h3>
            <p>Emojis and GIFS</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="hussel">
  <div className="container">
    <div className="row">
      <div className="col-md-6 ">
        <h2>Send hassle-free StrinZ<br />
        in just few Clicks.
        </h2>
        <p>Streamline your communication with our hassle-free message sending in just a few clicks.Streamline your communication with our hassle-free message sending in just a few clicks.</p>
        <div className="read-btn">
        <a className="read" href="#">
            Download App
    </a>
        </div>
      </div>
      <div className="col-md-6">
      <img src={imglogo} className="d-block mx-auto" style={{ width: "400px" }} alt="BigCo Inc. logo" />
      </div>
      
    </div>
  </div>
</section>

<section className="features">
  <div className="container">
    <div className="row">
    <div className='col-md-12'>
      <h3>FEATURES</h3>
    </div>

    <Slider {...settings}>
    <div className='col-md-3'>
    <div className="card p-2">
    <img src={iconimg}  className="card-img-top" style={{ width: "80px" }} alt="BigCo Inc. logo" />
    <div className="card-body">
    <h5 className="card-title">Secure</h5>
    <p className="card-text">
    Streamline your communication with our hassle-free message sending in just a few clicks.Streamline your communication with our hassle-free message sending in just a few clicks.
    </p>
   
  </div>
</div>

    </div>
    <div className='col-md-3'>
    <div className="card p-2">
    <img src={iconimg} className="card-img-top" style={{ width: "80px" }} alt="BigCo Inc. logo" />
    <div className="card-body">
    <h5 className="card-title">Customize 
your StrinZ</h5>
    <p className="card-text">
    Streamline your communication with our hassle-free message sending in just a few clicks.Streamline your communication with our hassle-free message sending in just a few clicks.
    </p>
   
  </div>
</div>

    </div>
    <div className='col-md-3'>
    <div className="card p-2">
    <img src={iconimg} className="card-img-top" style={{ width: "80px" }} alt="BigCo Inc. logo" />
    <div className="card-body">
    <h5 className="card-title">Feature 03</h5>
    <p className="card-text">
    Streamline your communication with our hassle-free message sending in just a few clicks.Streamline your communication with our hassle-free message sending in just a few clicks.
    </p>
   
  </div>
</div>

    </div>
    <div className='col-md-3'>
    <div className="card p-2">
    <img src={iconimg}  className="card-img-top" style={{ width: "80px" }} alt="BigCo Inc. logo" />
    <div className="card-body">
    <h5 className="card-title">Feature 04</h5>
    <p className="card-text">
    Streamline your communication with our hassle-free message sending in just a few clicks.Streamline your communication with our hassle-free message sending in just a few clicks.
    </p>
   
  </div>
</div>

    </div>
    <div className='col-md-3'>
    <div className="card p-2">
    <img src={iconimg}  className="card-img-top" style={{ width: "80px" }} alt="BigCo Inc. logo" />
    <div className="card-body">
    <h5 className="card-title">Feature 04</h5>
    <p className="card-text">
    Streamline your communication with our hassle-free message sending in just a few clicks.Streamline your communication with our hassle-free message sending in just a few clicks.
    </p>
   
  </div>
</div>

    </div>
    <div className='col-md-3'>
    <div className="card p-2">
    <img src={iconimg}  className="card-img-top" style={{ width: "80px" }} alt="BigCo Inc. logo" />
    <div className="card-body">
    <h5 className="card-title">Feature 04</h5>
    <p className="card-text">
    Streamline your communication with our hassle-free message sending in just a few clicks.Streamline your communication with our hassle-free message sending in just a few clicks.
    </p>
   
  </div>
</div>

    </div>
    </Slider>
   
   

   
    </div>
  </div>
 
</section>

<section className="hussel">
  <div className="container">
    <div className="row">
      <div className="col-md-6 mt-5">
        <h2>Cusomize your StrinZ <br />
        with its Editor
        </h2>
        <p>Streamline your communication with our hassle-free message sending in just a few clicks.Streamline your communication with our hassle-free message sending in just a few clicks.</p>
        <div className="read-btn">
        <a className="read" href="#">
            Download App
    </a>
        </div>
      </div>
      <div className="col-md-6">
      <img src={right} className="d-block mx-auto" style={{ width: "300px" }} alt="BigCo Inc. logo" />
      </div>
      
    </div>
  </div>
</section>

<section className='frequently'>
<div className='container'>
  <div className='row'>
    <div className='col-md-12 text-center p-3'>
    <h2>Frequently Ask Qustions</h2>
      <p>Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices tellus consequat amet, lectus aliquam est in neque.</p>
    </div>
    <div className='col-md-1'></div>
    <div className='col-md-10'>
     

      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
       How to change PIN for future login?
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
       <h5>How to Delete my account on StrinZ App?</h5>
      <ol>
        <li>Open StrinZ on your registered phone, Go to Chat.</li>
        <li>Click Settings Icon 3. Delete Account</li>
        <li>Delete Account</li>
        <li>Create Back up (Optional)</li>
        <li>Select a reason to delete StrinZ account </li>
        <li>Enter PIN to delete StrinZ account.</li>
      </ol>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
       How to Log out from StrinZ App?
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        How to change Registered Mobile Number for StrinZ App?
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseFour"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
       How to change Mobile Phone Device for StrinZ App?
      </button>
    </h2>
    <div
      id="collapseFour"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
</div>
<div className='view'>
<a href="" className='viewall'>View All</a>
</div>
    </div>
    <div className='col-md-1'></div>
  </div>
</div>

</section>
      </>
    </div>
  )
}
