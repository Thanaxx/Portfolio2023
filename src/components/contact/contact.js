import React, { useRef, useState } from 'react';
import '../../styles/contact.css';
import {FaMobileAlt} from 'react-icons/fa';
import {ImLocation2} from 'react-icons/im';
import {IoIosCall} from 'react-icons/io';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function Contact() {

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
        <div className="contact-wrap" id="sendmessage">
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
                <form ref={form} onSubmit={sendEmail} class="form-hadler">
                    <input type="text" name="user_name" placeholder='NAME' value={uname} onChange={(e) => setUname(e.target.value)} />
                    <input type="email" name="user_mail" placeholder='EMAIL ADDRESS' value={umail} onChange={(e) => setUmail(e.target.value)} />
                    <textarea name="user_message" cols="30" rows="3" placeholder='MESSAGE' value={umessage} onChange={(e) => setUmessage(e.target.value)}></textarea>
                    {/* <div className="send-form">
                        <button type="submit">SEND</button>
                    </div> */}
                    <input type="submit" value="SUBMIT" className='send-inquiry' />
                </form>
                {/* <form>
                    <input type="text" name="" id="" placeholder='NAME'  />
                    <input type="email" name="" id="" placeholder='EMAIL ADDRESS' />
                    <input type="number" name="" id="" placeholder='PHONE NUMBER' />
                    <textarea name="" id="" cols="30" rows="5" placeholder='MESSAGE'></textarea>

                    <div className="send-inquiry">
                        <button>Send message</button>
                    </div>
                </form> */}
            </div>
        </div>
    </>
  )
}

export default Contact