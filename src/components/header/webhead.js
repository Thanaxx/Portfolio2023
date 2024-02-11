import React, { useState } from 'react';
import { useRef } from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import {MdOutlineKeyboardArrowDown, MdKeyboardArrowRight} from 'react-icons/md';
import {BsThreeDots} from 'react-icons/bs';
import '../../styles/head.css';
import CarouselStacks from '../carousel/carouselStacks';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function Webhead() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_caektf9', 'template_8635t7s', form.current, 'V3BHhaTHgYS6Uv291')
        .then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });

              e.target.reset();

              setUname("");
              setUmail("");
              setUmessage("");

        }, (error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
        });
    };

    //form value before resetting them after the form will be submitted
    const [uname, setUname] = useState();
    const [umail, setUmail] = useState();
    const [umessage, setUmessage] = useState();

  return (
    <>
        <div className="head-wrap">
            <div className="head-grid">
                <button class="story-btn" type="button" data-bs-toggle="modal" data-bs-target="#storyModal">
                    <div className="head-col profile-img">
                        <img src="/images/tel-ig.png" alt="portfolio profile" />
                    </div>
                </button>

                <div className="head-col profile-desc-wrap">
                    <div className="profile-name">
                    <h1 className='display-name-mbl'><a href="/">anonymous</a> <span><BsPatchCheckFill/></span> </h1>
                        <div className="head-opt">
                            <h1><a href="/">anonymous</a><span><BsPatchCheckFill/></span></h1>

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
                                                <img src="/images/tel-ig.png" alt="" />
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
                                        <div className="modal-profile">
                                            <div className="modal-profile-image">
                                                <img src="/images/tel-ig.png" alt="" />
                                            </div>
                                            <div className="modal-profile-name">
                                                <h4>Get in touch with me!</h4>
                                                <p>I believe in access to opportunity As the world evolves, so does the way we work.</p>
                                            </div>
                                        </div>

                                    <div class="modal-body">
                                       <div className="message-form">
                                            <form ref={form} onSubmit={sendEmail} class="form-hadler">
                                                <input type="text" name="user_name" placeholder='NAME' value={uname} onChange={(e) => setUname(e.target.value)} />
                                                <input type="email" name="user_mail" placeholder='EMAIL ADDRESS' value={umail} onChange={(e) => setUmail(e.target.value)} />
                                                <textarea name="user_message" cols="30" rows="3" placeholder='MESSAGE' value={umessage} onChange={(e) => setUmessage(e.target.value)}></textarea>
                                                {/* <div className="send-form">
                                                    <button type="submit">SEND</button>
                                                </div> */}
                                                <input type="submit" value="SUBMIT ME" className='sendMessage' />
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
                                            <div class="modal-header">
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-profile">
                                                <div className="modal-profile-image">
                                                    <img src="/images/tel-ig.png" alt="" />
                                                </div>
                                                <div className="modal-profile-name">
                                                    <h4>Wanna know more about me?</h4>
                                                    <p>I believe in access to opportunity As the world evolves, so does the way we work.</p>
                                                </div>
                                            </div>
                                            <div class="modal-body">
                                                <div className="more-opt">
                                                    <ul>
                                                        <a href="/about#personalinfo"> <li>ABOUT DEV</li> </a>
                                                        <a href="/services#srvc"> <li>OFFERED SERVICES</li> </a>
                                                        <a href="https://drive.google.com/file/d/1PFs_k3g7kMJNKT98-UEm7PiSYpTIhvjx/view?usp=sharing"> <li>RESUME / CV</li> </a>
                                                        <a href="/contact#sendmessage"> <li>CONTACT</li> </a>
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
                            <p><strong>10</strong> github repositories </p>
                            <p><strong>8</strong> tech languages </p>
                            <p><strong>8</strong> personal projects </p>
                            <p><strong>7</strong> working projects </p>
                        </div>
                    </div>

                    <div className="profile-desc">
                        <p className='cName' >Christel Joy A. Abordaje</p>
                        <p>#Women in Tech</p>
                        <p>Self-taught Front-end Developer</p>
                        <p>Computer Science Degree Holder</p>
                        <p>Career Service Professional Eligibility Holder</p>
                        <p>Iloilo City, Philippines</p> <br/>
                        <p className='followers'>Followed <strong>Chris Sean, Mark Zuckerberg</strong> +108more</p>
                    </div>

                    <div className="profile-count-b">
                        <div className="count-grid-b">
                        <p><strong>10 <br /></strong> github repositories </p>
                            <p><strong>8 <br /></strong> programming languages </p>
                            <p><strong>8 <br /></strong> personal projects </p>
                            <p><strong>7 <br /></strong> work projects </p>
                        </div>
                    </div>
                </div>
            </div>

            {/**STORY */}
            <div class="modal fade more-modal-body" id="storyModal" tabindex="-1" aria-labelledby="storyModal" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content story-content">
                        <div class="modal-body">
                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="/images/story/4.png" alt="" />
                                </div>
                                <div class="carousel-item">
                                    <img src="/images/story/1.png" alt="" />
                                </div>
                                <div class="carousel-item">
                                    <img src="/images/story/2.png" alt="" />
                                </div>
                                <div class="carousel-item">
                                    <img src="/images/story/3.png" alt="" />
                                </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <CarouselStacks />
    </>
  )
}

export default Webhead