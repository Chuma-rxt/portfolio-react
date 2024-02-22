import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'; // Import emailjs-com
import { MdLocationOn, MdPhone, MdEmail, MdLanguage } from 'react-icons/md';
//import { FaGithub, FaCodepen, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./FormStyles.scss";

function Form() {
    const [user, setUser] = useState({
        FullName: '',
        Subject: '',
        Email: '',
        Message: ''
    });

    const [captchaVerified, setCaptchaVerified] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleCaptchaChange = (response) => {
        if (response) {
            setCaptchaVerified(true);
        } else {
            setCaptchaVerified(false);
        }
    }

    const isFormValid = () => {
        return user.FullName.trim() !== '' && user.Subject.trim() !== '' && user.Email.trim() !== '' && user.Message.trim() !== '' && captchaVerified;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            toast.error('Please fill in all fields and verify captcha');
            return;
        }

        const { FullName, Subject, Email, Message } = user;

        try {
            await emailjs.sendForm('service_zv9hn9a', 'template_2oo3qwi', e.target, 'wSaoVe3DwwbqMEtrt');
            console.log("Email sent successfully");

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    FullName, Subject, Email, Message
                })
            };

            const res = await fetch('https://contact-form-37435-default-rtdb.firebaseio.com/UserData.json', options);
            if (res.ok) {
                toast.success('Message Sent Successfully');
                setUser({ FullName: '', Subject: '', Email: '', Message: '' }); // Clear form fields on success
            } else {
                throw new Error('Error Occurred');
            }
        } catch (error) {
            console.error(error);
            toast.error('Error Occurred');
        }
    }

    return (
        <div className="form">
            <div className="contact-info">
                <h2>Contact Information</h2>
                <ul>
                    <li><MdLocationOn /> <strong>Location:</strong> Langa, Cape Town, 7441</li>
                    <li><MdPhone /> <strong>Phone:</strong> +27 733 265 346</li>
                    <li><MdEmail /> <strong>Email:</strong> <a href="mailto:craxoti60@gmail.com">craxoti60@gmail.com</a></li>
                    <li><MdLanguage /> <strong>Website:</strong> <a href="https://portfolio-rose-mu-47.vercel.app" target="_blank" rel="noopener noreferrer">My Portfolio</a></li>
                </ul>
            </div>

            <div class="form-row">
                <div className="iframe-container">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28486.118852609193!2d18.4240555!3d-33.9248688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc670e6b8b7a79%3A0x23a590251013b17d!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2suk!4v1645393407367!5m2!1sen!2suk"
                    title="Google Maps"
                    allowFullScreen
                    loading="lazy"
                    ></iframe>
                </div>

                <form onSubmit={handleSubmit}>
                    <h2 style={{ textAlign: "center", color: "#595959" }}>Send Me A Message</h2>
                    <br/>

                    <label>Your Name</label>
                    <input
                        type="text"
                        name="FullName"
                        placeholder="Name"
                        value={user.FullName}
                        onChange={handleInputChange}
                        required
                        pattern="[a-zA-Z]{2,}"
                        title="Name must be at least 3 characters long and contain only letters"
                    />

                    <label>Subject</label>
                    <input
                        type="text"
                        name="Subject"
                        placeholder="subject"
                        value={user.Subject}
                        onChange={handleInputChange}
                        required
                        pattern="[a-zA-Z]{3,}"
                        
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        value={user.Email}
                        onChange={handleInputChange}
                        required
                        pattern="[a-z0-9._%+-]+@gmail\.com"
                    />

                    <label>Message</label>
                    <textarea
                        rows="6"
                        name="Message"
                        placeholder="Type your message here"
                        value={user.Message}
                        onChange={handleInputChange}
                        required
                    />

                    <div className="send-btn-container">
                        <ReCAPTCHA
                            className="my-recaptcha"
                            sitekey="6LeKb3IpAAAAAN_9K8pJxKSMuSCD1HyKlQLBaSJC"
                            onChange={handleCaptchaChange}
                        />
                    </div>
                    <br/><br/>
                    <button type="submit" className="bTNN">Submit</button>
                </form>
            </div>
            <ToastContainer />
        </div>












    
        
  
    );
}

export default Form;
