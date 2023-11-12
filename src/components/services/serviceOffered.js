import React from 'react';
import servicename from '../data/service';
import '../../styles/service.css';
import {ImArrowDown} from 'react-icons/im';

function serviceOffered() {
  return (
    <>
      <div className="services-main" id='srvc'>
        <div className="service-section-grid">
              {servicename.map((items, index) => (
                <>
                  <div className="service-card">
                    <span>{items.servicetag}</span>
                    <h3>{items.servicename}</h3>
                    <img src={items.serviceicon} alt="" />
                    <p>{items.servicedesc}</p>
                  </div>
                </>
              ))}
        </div>

        <div className="service-info">
          <div className="srvc-text">
            <h3>HIRE ME ON YOUR NEXT PROJECT</h3>
              <p>With 5+ years using Webflow, and 10+ years creating for the web, I can join your upcoming project to lead development in a design-first, systematic way that will scale with your brand.</p>
            </div>
            <div className="service-cta">
              <div className='arrow-icon'><ImArrowDown /></div>
              <button>MESSAGE ME</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default serviceOffered