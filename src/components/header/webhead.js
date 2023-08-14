import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import {BsThreeDots} from 'react-icons/bs';
import '../../styles/head.css';
import CarouselStacks from '../carousel/carouselStacks';
import MainNav from '../../components/nav/mainnav';

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
                            <h1>developedbytel<span>  <BsPatchCheckFill/></span> </h1>
                            <button>Projects <MdOutlineKeyboardArrowDown/></button>
                            <button>Message</button>
                            <button className='dots' ><BsThreeDots/></button>
                        </div>
                    </div>

                    <div className="profile-count">
                        <div className="count-grid">
                            <p><strong>10</strong> Repositories </p>
                            <p><strong>8</strong> Tech Stacks </p>
                            <p><strong>7</strong> Live Projects </p>
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
        <MainNav />
    </>
  )
}

export default webhead