import React from 'react';
import {ImGithub} from 'react-icons/im'
import {AiFillLinkedin} from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import '../../styles/footer.css'

function footer() {
  return (
    <>
        <div className="footer-section">
            <div className="footer-tag">
                <h1>LET’S TALK ABOUT THE NEXT BIG THING</h1>
            </div>
            <hr />

            {/**SOCIAL MEDIA */}
            <div className="socmed-wrap">
                <div className="socmed-title">
                    <h1>Connect with me !</h1>
                </div>
                <div className="socmed-icons">
                    <ImGithub className='soc' />
                    <AiFillLinkedin className='soc' />
                    <FaInstagramSquare className='soc' />
                    <BiLogoFacebookSquare className='soc' />
                </div>
            </div>

            <div className="quick-links">
                <ul>
                    <li><a href="/">Resume</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                </ul>
            </div>

            <div className="copyright">
                <h4>Build by Christel</h4>
                <p>© 2023 Copyright | All Rights Reserved.</p>
            </div>

        </div>
    </>
  )
}

export default footer