import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import fireDb from "./firebaseInit"; // Import initialized Firebase app
import "./FormStyles.scss";

function Form ()  {
    const [user, setUser] = useState({
        FullName: '', Email:'', Message:''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value});
    }

    const handleCaptchaChange = (response) => {
        // Assuming 'response' is the captcha response token
        // Validate the captcha response
        if (isValidCaptcha(response)) {
            // Captcha validation passed, perform further actions
            console.log("Captcha validation passed. Proceed with further actions.");
            // Add your logic here
        } else {
            // Captcha validation failed
            console.error("Captcha validation failed. Please try again.");
            // Handle failure case or prompt the user to try again
        }
    }

    const isValidCaptcha = (response) => {
        // You can implement your captcha validation logic here
        // For now, return true to simulate a successful validation
        return true;
    }

    const isFormValid = () => {
        return user.FullName.trim() !== '' && user.Email.trim() !== '' && user.Message.trim() !== '';
    }

    const getData = async (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            toast.error('Please fill in all fields');
            return;
        }

        const { FullName, Email, Message } = user;
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FullName, Email, Message
            })
        }

        try {
            const res = await fetch('https://contact-form-37435-default-rtdb.firebaseio.com/UserData.json', options);
            if (res) {
                alert('Message Sent Successfully');
                setUser({ FullName: '', Email: '', Message: '' }); // Clear form fields on success
            } else {
                toast.error('Error Occurred');
            }
        } catch (error) {
            console.error(error);
            toast.error('Error Occurred');
        }
    }

    return (
        <div className="form">
            <form>
                <label>Your Name</label>
                <input
                    type="text"
                    name="FullName"
                    placeholder="Name"
                    value={user.FullName}
                    onChange={handleInputChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    value={user.Email}
                    onChange={handleInputChange}
                />

                <label>Message</label>
                <textarea
                    rows="6"
                    name="Message"
                    placeholder="Type your message here"
                    value={user.Message}
                    onChange={handleInputChange}
                />

                <div className="send-btn-container">
                    <ReCAPTCHA
                        className="my-recaptcha"
                        sitekey="6LeKb3IpAAAAAN_9K8pJxKSMuSCD1HyKlQLBaSJC"
                        onChange={handleCaptchaChange}
                    />
                </div>

                <button className="bTNN" onClick={getData}>Submit</button>
            </form>
        </div>
    )
}

export default Form;
