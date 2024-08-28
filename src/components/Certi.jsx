import React from 'react';
import front from '../assets/images/front-end.jpg';
import reacti from '../assets/images/react-i.jpg';
import reactw from '../assets/images/react-w.jpg';
import nss from '../assets/images/nss.jpg';
import csi from '../assets/images/csi.jpg';
import './Certi.css';

export default function Certi() {
  return (
    <section  id='certificates' className='sect' >
       <h2 className='cert-text'>Certificate</h2>
      <div className='section-certi'>
          
      <div className='container-cert'>
        <div className='cert1'>
          <div className="card text-start">
            <img className="card-img-top" src={front} alt="Certificate" />
            
          </div>
        </div>
      </div>
      <div className='container-cert'>
        <div className='cert1'>
          <div className="card text-start">
            <img className="card-img-top" src={reacti} alt="Certificate" />
            
          </div>
        </div>
      </div>
      </div>

       <div className='section-certi'>
          
      <div className='container-cert'>
        <div className='cert1'>
          <div className="card text-start">
            <img className="card-img-top" src={reactw} alt="Certificate" />
            
          </div>
        </div>
      </div>
      <div className='container-cert'>
        <div className='cert1'>
          <div className="card text-start">
            <img className="card-img-top" src={nss} alt="Certificate" />
            
          </div>
        </div>
      </div>
      
      </div>
      <div className='section-certi'>
          
          <div className='container-cert'>
            <div className='cert1'>
              <div className="card text-start">
                <img className="card-img-top" src={csi} alt="Certificate" />
                
              </div>
            </div>
          </div>
          <div className='container-cert'>
            <div className='cert1'>
              <div className="card text-start">
                <img className="card-img-top" src={reacti} alt="Certificate" />
                
              </div>
            </div>
          </div>
          </div>
    </section>
  );
}
