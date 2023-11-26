import React from 'react';
import '../../styles/about.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {AiOutlineCodepenCircle} from 'react-icons/ai';

function more() {
  return (
    <>
        <div className="more-page-wrap" id='personalinfo'>
            <div className="about-intro">
                <h1>GET TO KNOW MORE ABOUT ME AS A DEV</h1>
                <p>“I believe in access to opportunity As the world evolves, so does the way we work. Joining a distributed team offers tech talent access to thousands of new job opportunities while companies stay ahead of the curve with remote work.”</p>
            </div>

            <div className="about-history">

                <VerticalTimeline>
                    

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work work-card"
                        date="Oct 2022 - Present"
                        contentStyle={{ background: '#252525', color: '#252525' }}
                        iconStyle={{ background: '#222222', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #252525' }}
                        icon={<AiOutlineCodepenCircle />}
                    >
                        <h3 className="work-name">Front-end Web Developer </h3>
                        <h4 className="company-name">Marivent Hotels and Resorts Inc.</h4>
                        <h6 className="address-name">Victoria Sports Hotel, Quezon City</h6> <br />
                        <span className='resp-cont' >• Web design | testing | QA | Deployment | Domain Registration and SSL Certificate handling </span> <br />
                        <span className='resp-cont' >• 7 overall business websites</span> <br />
                        <span className='resp-cont' >• Maintain Website funtionalities for all 3 business units | 7 websites overall</span> <br />
                        <span className='resp-cont' >• Handle Microsoft 365 Office accounts | create employee accounts | modify office acounts</span>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work work-card"
                        date="Oct 2022"
                        contentStyle={{ background: '#252525', color: '#252525' }}
                        iconStyle={{ background: '#222222', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #252525' }}
                        icon={<AiOutlineCodepenCircle />}
                    >
                        <h3 className="work-name">Career Service Professional Eligibility Holder </h3>
                        <h4 className="company-name">Iloilo City, Philippines</h4> <br />
                        <span className='resp-cont' >• Passed 2022 CSE Exam</span> <br />
                        <span className='resp-cont' >• Professional Level</span> <br />
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work work-card"
                        date="May 2022 - October 2022"
                        contentStyle={{ background: '#252525', color: '#252525' }}
                        iconStyle={{ background: '#222222', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #252525' }}
                        icon={<AiOutlineCodepenCircle />}
                    >
                        <h3 className="work-name">Associate - Ops | Travel Business Unit </h3>
                        <h4 className="company-name">WNS ILOILO</h4>
                        <h6 className="address-name">Iloilo City, Philippines</h6> <br />
                        <span className='resp-cont' >• Responsible on creating a flight details of the customers </span> <br />
                        <span className='resp-cont' >• Working on Airline Codes</span> <br />
                        <span className='resp-cont' >• Hnadle customer flight concerns.</span> <br />
                        <span className='resp-cont' >• Work with Indian Nationals </span>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work work-card"
                        date="July 2018 - July 2022"
                        contentStyle={{ background: '#252525', color: '#252525' }}
                        iconStyle={{ background: '#222222', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #252525' }}
                        icon={<AiOutlineCodepenCircle />}
                    >
                        <h3 className="work-name">Bachelor of Science in Computer Science </h3>
                        <h4 className="company-name">Iloilo Science and Technology University</h4>
                        <h6 className="address-name">Iloilo City, Philippines</h6> <br />
                        <span className='resp-cont' >• Academic Merit Awardee </span> <br />
                        <span className='resp-cont' >• Deans Lister</span>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work work-card"
                        date="March 2022 - June 2022"
                        contentStyle={{ background: '#252525', color: '#252525' }}
                        iconStyle={{ background: '#222222', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #252525' }}
                        icon={<AiOutlineCodepenCircle />}
                    >
                        <h3 className="work-name">IT Business Developer </h3>
                        <h4 className="company-name">Alabaster Technologies Inc.</h4>
                        <h6 className="address-name">Kalibo Aklan, Philippines</h6> <br />
                        <span className='resp-cont' >• Worked with Developers </span> <br />
                        <span className='resp-cont' >• Growing a Start-up Company</span> <br />
                        <span className='resp-cont' >• Handles client business inquiries by creating proposals for their Mobile or Website request </span> <br />
                        <span className='resp-cont' >• Create email templates </span>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work work-card"
                        date="Nov 2021 - Feb 2022"
                        contentStyle={{ background: '#252525', color: '#252525' }}
                        iconStyle={{ background: '#222222', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #252525' }}
                        icon={<AiOutlineCodepenCircle />}
                    >
                        <h3 className="work-name">Website Developer Intern | Virtual </h3>
                        <h4 className="company-name">NeoDocto</h4>
                        <h6 className="address-name">245 Park Avenue, 39th Floor, Manhattan, New York, NY 10167, USA </h6> <br />
                        <span className='resp-cont' >• Edit product data and design of website </span> <br />
                        <span className='resp-cont' >• 7 overall business websites</span> <br />
                        <span className='resp-cont' >• Critique website design and functions for modification</span> <br />
                        <span className='resp-cont' >• Collaborate with other international interns</span>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work work-card"
                        date="May 2019 - October 2019"
                        contentStyle={{ background: '#252525', color: '#252525' }}
                        iconStyle={{ background: '#222222', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #252525' }}
                        icon={<AiOutlineCodepenCircle />}
                    >
                        <h3 className="work-name">Private Secretary </h3>
                        <h4 className="company-name">Sun Life Financial Services Company</h4>
                        <h6 className="address-name">Iloilo City, Philippines</h6> <br />
                        <span className='resp-cont' >• Manage and update client’s information and insurance </span> <br />
                        <span className='resp-cont' >• Creates a proposal for clients</span> <br />
                        <span className='resp-cont' >• Teach financial advisors with the current technology/system to handle their business.  </span>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work work-card"
                        date="March 2019 - Aug 2019"
                        contentStyle={{ background: '#252525', color: '#252525' }}
                        iconStyle={{ background: '#222222', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #252525' }}
                        icon={<AiOutlineCodepenCircle />}
                    >
                        <h3 className="work-name">Lead Verification Specialist </h3>
                        <h4 className="company-name">TruAlliant Inc. </h4>
                        <h6 className="address-name">Iloilo City </h6> <br />
                        <span className='resp-cont' >• Take outbound calls. </span> <br />
                        <span className='resp-cont' >• Offers health and life insurance to international clients</span> <br />
                        <span className='resp-cont' >• Provide clients with the product information and services and negotiating also product offered for sales</span> <br />
                        <span className='resp-cont' >• Work with US Nationals</span>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<AiOutlineCodepenCircle />}
                    />
                </VerticalTimeline>
            </div>

        </div>
    </>
  )
}

export default more