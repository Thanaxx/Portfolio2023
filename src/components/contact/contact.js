import React from 'react';
import {ImGithub} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import '../../styles/contact.css';
import {FaMobileAlt} from 'react-icons/fa';
import {ImLocation2} from 'react-icons/im';
import {IoIosCall} from 'react-icons/io';

function contact() {
  return (
    <>
        <div className="contact-wrap">
            <div className="contact-title">
                <h1>Get in touch with me!</h1>
            </div>
            <div className="contact-grid">
                <div className="contact-col">
                    <FaMobileAlt className='cont-icon' />
                    <h3>PHONE</h3>
                    <p>+63 930 300 9243</p>
                </div>

                <div className="contact-col cont-border">
                    <ImLocation2 className='cont-icon' />
                    <h3>LOCATION</h3>
                    <p>+63 930 300 9243</p>
                </div>

                <div className="contact-col">
                    <IoIosCall className='cont-icon' />
                    <h3>PHONE</h3>
                    <p>+63 930 300 9243</p>
                </div>
            </div>

            <div className="contact-form-title">
                <h1>IF YOU GOT ANY QUESTIONS PLEASE DO NOT HESITATE TO SEND US A MESSAGE</h1>
            </div>
            <div className="contact-form">
                <form>
                    <input type="text" name="" id="" placeholder='NAME' />
                    <input type="email" name="" id="" placeholder='EMAIL ADDRESS' />
                    <input type="number" name="" id="" placeholder='PHONE NUMBER' />
                    <textarea name="" id="" cols="30" rows="5" placeholder='MESSAGE'></textarea>
                    
                    <div className="send-inquiry">
                        <button>Send message</button>
                    </div>
                </form>
            </div>

            {/**SOCIAL MEDIA */}
            <div className="socmed-wrap">
                <div className="socmed-title">
                    <h1>Connect with us !</h1>
                </div>
                <div className="socmed-icons">
                    <ImGithub />
                    <BsLinkedin />
                    <AiOutlineInstagram />
                    <BiLogoFacebookSquare />
                </div>
            </div>
        </div>
    </>
  )
}

export default contact