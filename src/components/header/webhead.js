import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import {BsThreeDots} from 'react-icons/bs';
import '../../styles/head.css'

function webhead() {
  return (
    <>
        <div className="head-wrap">
            <div className="head-grid">
                <div className="head-col profile-img">
                    <img src="/images/Profile.png" alt="portfolio profile" />
                </div>

                <div className="head-col profile-desc-wrap">
                    <div className="profile-name">
                        <h1>christeljoy <span><BsPatchCheckFill/></span> </h1>
                    </div>
                    <div className="profile-desc">
                        <p>Christel Joy A. Abordaje</p>
                        <p>#Women in Tech</p>
                        <p>Self-taught Front-end Developer</p>
                        <p>Computer Science Degree Holder</p>
                        <p>Career Service Professional Eligibility Holder</p>
                        <p>Iloilo City, Philippines</p>
                        <p>Followed Chris Sean, Mark Zuckerberg +114more</p>
                    </div>
                </div>

                <div className="head-col">
                    <div className="head-opt">
                        <button>Projects <MdOutlineKeyboardArrowDown/></button>
                        <button>Message</button>
                        <button><BsThreeDots/></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default webhead