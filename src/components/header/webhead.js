import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import {MdOutlineKeyboardArrowDown, MdKeyboardArrowRight} from 'react-icons/md';
import {BsThreeDots} from 'react-icons/bs';
import '../../styles/head.css';
import CarouselStacks from '../carousel/carouselStacks';

function webhead() {
  return (
    <>
        <div className="head-wrap">
            <div className="head-grid">
                <div className="head-col profile-img">
                    <img src="/images/tel-ig.png" alt="portfolio profile" />
                </div>

                <div className="head-col profile-desc-wrap">
                    <div className="profile-name">
                    <h1 className='display-name-mbl' >anonymous<span><BsPatchCheckFill/></span> </h1>
                        <div className="head-opt">
                            <h1>anonymous<span><BsPatchCheckFill/></span> </h1>

                            <button class="ig-btn" type="button" data-bs-toggle="modal" data-bs-target="#projModal">
                                Projects <MdOutlineKeyboardArrowDown class="prj-icon" />
                            </button>

                            {/**PROJECT MODAL */}
                            <div class="modal fade proj-modal-body" id="projModal" tabindex="-1" aria-labelledby="moreModal" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    {/**Modal body*/}
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-profile">
                                            <div className="modal-profile-image">
                                                <img src="/images/Profile.png" alt="" />
                                            </div>
                                            <div className="modal-profile-name">
                                                <p>Anonymous</p>
                                            </div>
                                        </div>
                                        <div class="modal-body">
                                            <div className="modal-proj-list">
                                                <ul>
                                                    <li><a class="dropdown-item" href="https://nifty-bhaskara-9c7adf.netlify.app/" target='_blank' >WBLD <MdKeyboardArrowRight class="prj-icon" /></a></li>
                                                    <li><a class="dropdown-item" href="https://festive-babbage-c7450f.netlify.app/" target='_blank' >MEDCARE <MdKeyboardArrowRight class="prj-icon" /></a></li>
                                                    <li><a class="dropdown-item" href="https://zealous-thompson-fd42cd.netlify.app/" target='_blank' >Foodie <MdKeyboardArrowRight class="prj-icon" /></a></li>
                                                    <li><a class="dropdown-item" href="https://naughty-ritchie-f772e5.netlify.app/" target='_blank' >FRNTR <MdKeyboardArrowRight class="prj-icon"/></a></li>
                                                    <li><a class="dropdown-item" href="https://eloquent-shockley-854149.netlify.app/" target='_blank'>Badiangan <MdKeyboardArrowRight class="prj-icon" /></a></li>
                                                    <li><a class="dropdown-item" href="https://rococo-croquembouche-1d0f2e.netlify.app/" target='_blank' >NewsBreak <MdKeyboardArrowRight class="prj-icon" /></a></li>
                                                    <li><a class="dropdown-item" href="https://effortless-kheer-3ee7c5.netlify.app/" target='_blank' >NextGen <MdKeyboardArrowRight class="prj-icon" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/**MESSAGE */}
                            <button class="ig-btn" type="button" data-bs-toggle="modal" data-bs-target="#messageModal">
                                Message
                            </button>
                            {/**MESSAGE */}
                            <div class="modal fade message-modal-body" id="messageModal" tabindex="-1" aria-labelledby="messageModal" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                    <div class="modal-body">
                                       <div className="message-title">
                                            <p>MESSAGE ME NOW</p>
                                       </div>
                                       <div className="message-form">
                                            <form class="form-hadler">
                                                <input type="text" name="username" id="" placeholder='Name' />
                                                <input type="email" name="username" id="" placeholder='Email Address' />
                                                <textarea name="message" id="" cols="30" rows="3" placeholder='Message'></textarea>
                                                <div className="send-form">
                                                    <button type="submit">Send</button>
                                                </div>
                                            </form>
                                       </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            {/**ABOUT */}
                            <div>
                                <button class="ig-btn-a" type="button" data-bs-toggle="modal" data-bs-target="#moreModal">
                                    <BsThreeDots/>
                                </button>
                                {/**ABOUT MODAL */}
                                <div class="modal fade more-modal-body" id="moreModal" tabindex="-1" aria-labelledby="moreModal" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <div className="more-opt">
                                                    <ul>
                                                    <li><a href="/about"> About </a></li>
                                                    <li><a href="/services#srvc"> Services </a></li>
                                                    <li><a href="/resume"> Resume </a></li>
                                                    <li><a href="/contact" > Get in touch </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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