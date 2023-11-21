import React from 'react'
import WEBLOGO from '../assets/strinz-logo.png';
import modalimage from '../assets/image-4.png';
export default function Footer() {
  return (
    <>

<>
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
            <div className='row'>
                <div className='col-md-8'>
                    <h2>scan this QR code to<br /> Download StrinZ app</h2>
                    <ul>
                        <li>Unlock your phone and launch your camera app, then focus it on the QR code.</li>
                        <li>Alternatively, you can download a QR code scanner from your app store.</li>
                        <li>Once scanned, tap the generated link to start downloading StrinZ.</li>
                        </ul>
                </div>
                <div className='col-md-4'>
                <img src={modalimage}  className="card-img-top" alt="QR Code" />  
                </div>
            </div>
        </div>
       
      </div>
    </div>
  </div>
</>


    <footer className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='footer-logo'>
                    <img src={WEBLOGO} alt="BigCo Inc. logo"/>
                    </div>
                
                    </div>

                    <div className='col-md-8'>
                    <div className='footer-ul'>
                        <ul>
                            <li>About us</li>
                            <li>Term & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Help</li>
                            <li>Careers</li>
                            <li>Contact us</li>

                        </ul>
                    </div>
                  
                    </div>
            </div>
            <div className='row'>
                <hr />
                <div className='col-md-4'>
                   <p>© StrinZ. 2023.</p>
                </div>
                <div className='col-md-8'>
                    <div className='footer-content'>
                    <span>Follow us on</span>
                    <ul>
                        <li><i className="fa-brands fa-facebook-f"></i></li>
                        <li><i className="fa-brands fa-x-twitter"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                      
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    </>
  )
}
