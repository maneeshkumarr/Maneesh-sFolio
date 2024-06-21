import React from 'react';
import card1 from '../assets/images/front-end.jpg';
import './Certi.css';

export default function Certi() {
  return (
    <section  id='certificates' className='sect' >
       <h2 className='cert-text'>Certificate</h2>
      <div className='section-certi'>
          
      <div className='container-cert'>
        <div className='cert1'>
          <div className="card text-start">
            <img className="card-img-top" src={card1} alt="Certificate" />
            
          </div>
        </div>
      </div>
      <div className='container-cert'>
        <div className='cert1'>
          <div className="card text-start">
            <img className="card-img-top" src={card1} alt="Certificate" />
            
          </div>
        </div>
      </div>
      </div>

       <div className='section-certi'>
          
      <div className='container-cert'>
        <div className='cert1'>
          <div className="card text-start">
            <img className="card-img-top" src={card1} alt="Certificate" />
            
          </div>
        </div>
      </div>
      <div className='container-cert'>
        <div className='cert1'>
          <div className="card text-start">
            <img className="card-img-top" src={card1} alt="Certificate" />
            
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
