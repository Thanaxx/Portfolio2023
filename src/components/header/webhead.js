import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import {BsThreeDots} from 'react-icons/bs';
import '../../styles/head.css';
import CarouselStacks from '../carousel/carouselStacks';

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
                        <div className="head-opt">
                            <h1>anonymous<span>  <BsPatchCheckFill/></span> </h1>

                            <button><div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects <MdOutlineKeyboardArrowDown/>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="https://nifty-bhaskara-9c7adf.netlify.app/" target='_blank' >WBLD</a></li>
                                    <li><a class="dropdown-item" href="https://festive-babbage-c7450f.netlify.app/" target='_blank' >MEDCARE</a></li>
                                    <li><a class="dropdown-item" href="https://zealous-thompson-fd42cd.netlify.app/" target='_blank' >Foodie</a></li>
                                    <li><a class="dropdown-item" href="https://naughty-ritchie-f772e5.netlify.app/" target='_blank' >FRNTR</a></li>
                                    <li><a class="dropdown-item" href="https://eloquent-shockley-854149.netlify.app/" target='_blank'>Badiangan</a></li>
                                    <li><a class="dropdown-item" href="https://rococo-croquembouche-1d0f2e.netlify.app/" target='_blank' >NewsBreak</a></li>
                                    <li><a class="dropdown-item" href="https://effortless-kheer-3ee7c5.netlify.app/" target='_blank' >NextGen</a></li>
                                </ul>
                            </div></button>

                            <button>Message</button>

                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots/>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/about">About</a></li>
                                    <li><a class="dropdown-item" href="/services">Services</a></li>
                                    <li><a class="dropdown-item" href="/contact">Get in touch</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="profile-count">
                        <div className="count-grid">
                            <p><strong>10</strong> repositories </p>
                            <p><strong>8</strong> tech languages </p>
                            <p><strong>8</strong> personal projects </p>
                            <p><strong>7</strong> live projects </p>
                        </div>
                    </div>

                    <div className="profile-desc">
                        <p className='cName' >Christel Joy A. Abordaje</p>
                        <p>#Women in Tech</p>
                        <p>Self-taught Front-end Developer</p>
                        <p>Computer Science Degree Holder</p>
                        <p>Career Service Professional Eligibility Holder</p>
                        <p>Iloilo City, Philippines</p> <br/>
                        <p>Followed <strong>Chris Sean, Mark Zuckerberg</strong> +108more</p>
                    </div>
                </div>
            </div>
        </div>

        <CarouselStacks />
    </>
  )
}

export default webhead