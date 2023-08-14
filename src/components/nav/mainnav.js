import React from 'react';
import '../../styles/nav.css';
import {FaUserSecret} from 'react-icons/fa';
import {CgMenuGridR} from 'react-icons/cg';
import {MdContactSupport} from 'react-icons/md';

function mainnav() {
  return (
    <>
        <div className="navWrap">
            <div className="navCont">
                <ul>
                    <li>
                        <FaUserSecret className='menuIcon'/><a href="/">ABOUT</a>
                    </li>

                    <li>
                        <CgMenuGridR className='menuIcon'/><a href="/">PROJECTS</a>
                    </li>

                    <li>
                        <MdContactSupport className='menuIcon' /><a href="/">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default mainnav