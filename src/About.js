import React from 'react'
import imglogo from './assets/group.jpg';
export default function About() {
  return (
    <>
<section className="page-bread">
<div className='container'>
    <div className='row'>
        <div className='col-md-12 text-center'>
            <h2>About us</h2>
            
        </div>
    </div>
</div>
</section>

    <section className='about'>
        <div className='container'>
            <div className='row'>
                <div class="col-md-6">
                  <h2>About us</h2>
                  <p>Welcome to StrinZ, where positive thoughts and emotions get converted into powerful messages with the help of AI. Our journey began with a simple yet powerful vision: to connect emotion Strings with people across the globe effortlessly with the positive, private, and personal messaging. Today, we are proud to introduce you to our messaging app where positivity, convenience, and privacy reign supreme. Welcome to StrinZ, where positive thoughts and emotions get converted into powerful messages with the help of AI. Our journey began with a simple yet powerful vision: to connect emotion Strings with people across the globe effortlessly with the positive, private, and personal messaging. Today, we are proud to introduce you to our messaging app where positivity, convenience, and privacy reign supreme.
</p>
                </div>
                <div class="col-md-6">
                <img src={imglogo} className="d-block mx-auto" style={{ width: "400px" }} alt="BigCo Inc. logo" /> 
                </div>
            </div>
        </div>
    </section>

    <section className='story'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2>OUR STORY</h2>
                    <p>StrinZ is the brainchild of a team of visionary and dedicated developers, designers who shared a common dream: to create a messenger app that would redefine how we interact in this digital age. Our story started as a response to the lack of positivity and safety in existing messaging and social-media platforms. We believe that online communication should be positive, secure, and tailored to your preferences, and that is what drove us to build a platform that helps connect strings with people by spreading positivity across digital communication channels.
</p>
                </div>
            </div>
        </div>
    </section>

    <section className='apart'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                  <h2>What Sets Us Apart</h2>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                    <img src={imglogo} className="d-block mx-auto" alt="BigCo Inc. logo" />
  <div className="card-body">
    <h5 className="card-title">Security First</h5>
    <p className="card-text">Your privacy and data security are our top priorities. With state-of-the-art encryption and robust privacy features, you can trust that your conversations are always private and safe.</p>
  </div>
</div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                    <img src={imglogo} className="d-block mx-auto" alt="BigCo Inc. logo" />
  <div className="card-body">
    <h5 className="card-title">Security First</h5>
    <p className="card-text">Your privacy and data security are our top priorities. With state-of-the-art encryption and robust privacy features, you can trust that your conversations are always private and safe.</p>
  </div>
</div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                    <img src={imglogo} className="d-block mx-auto" alt="BigCo Inc. logo" />
  <div className="card-body">
    <h5 className="card-title">Security First</h5>
    <p className="card-text">Your privacy and data security are our top priorities. With state-of-the-art encryption and robust privacy features, you can trust that your conversations are always private and safe.</p>
  </div>
</div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                    <img src={imglogo} className="d-block mx-auto" alt="BigCo Inc. logo" />
  <div className="card-body">
    <h5 className="card-title">Security First</h5>
    <p className="card-text">Your privacy and data security are our top priorities. With state-of-the-art encryption and robust privacy features, you can trust that your conversations are always private and safe.</p>
  </div>
</div>
                </div>
            </div>
        </div>
    </section>

    <section className='why-choose'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2>WHY CHOOSE US</h2>
                    <p>Seamless Communication: Enjoy instant message creation based on one-to-one relationship and emotion, options to choose your message from never ending list of messages, sharing messages with your friends, family, and loved ones at one place.
</p>
<p><b>Global Reach: </b>Create a String by sharing positive messages, connecting with friends and family across borders and time zones without any hassle. Always Free: Our basic features are free, and we provide premium options to cater to your specific needs.
</p>
<h4>Join Us on This Journey!
</h4>
<p>We are excited to have you as part of the StrinZ community. Our story is ongoing, and we invite you to be a part of it. Download our app today and experience messaging like never before. Let's connect, make new Strinz with friends, family and loved ones.</p>
<p>Thank you for choosing StrinZ. Together, we are redefining messaging for a positive, brighter, more connected future.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
