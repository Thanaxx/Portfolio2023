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
                <h1>LET’S TALK ABOUT THE NEXT BIG THING <span>|</span> </h1>
            </div>

            {/**SOCIAL MEDIA */}
            <div className="socmed-wrap">

                <div className="socmed-icons">
                    <a href="/"><ImGithub className='soc' /></a>
                    <a href="/"><AiFillLinkedin className='soc' /></a>
                    <a href="/"><FaInstagramSquare className='soc' /></a>
                    <a href="/"><BiLogoFacebookSquare className='soc' /></a>
                </div>
            </div>

            <div className="copyright">
                <p>© Christel 2021. All Rights Reserved.</p>
            </div>
        </div>
    </>
  )
}

export default footer