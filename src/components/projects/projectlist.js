import React from 'react';
import '../../styles/project.css';
import projects from '../data/projects';
import {BsHeart} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {FiLink} from 'react-icons/fi';
import {BsPatchCheckFill} from 'react-icons/bs';

function projectlist() {
  return (
    <>
      <div className="projectWrap">
        <div className="projectCont">
            <div className="projCard">
              {projects.map((items, index) => (
                <div className="projPoster">
                  <div className="projHead">
                    <img src="/images/ig-2.png" alt="" />
                    <p>christeljoy</p>
                    <span><BsPatchCheckFill/></span>
                  </div>

                  <div className="projPhotos">
                    <img src={items.image} alt="" />
                  </div>

                  <div className="projIcons">
                    <a href="/"><BsHeart /></a>
                    <a href={items.githublink}><BsGithub /></a>
                    <a href={items.liveproject}><FiLink /></a>
                  </div>

                  <div className="projDetail">
                    <p>{items.subject} <span>{items.caption}</span> </p>
                    <p>{items.subjectB} <span>{items.captionB}</span> </p>
                  </div>

                  <div className="projDate">
                    <p>1 year ago</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default projectlist