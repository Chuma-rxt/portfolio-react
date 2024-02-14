import ReCAPTCHA from 'react-google-recaptcha';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import fireDb from "./firebaseInit"; // Import initialized Firebase app
import "./FormStyles.scss";


function Form ()  {

  function handleCaptchaChange(response) {
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

function isValidCaptcha(response) {
  
  return true;
}


  const recaptchaRef = React.createRef();
 const onSubmit = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    this.props.onSubmit(recaptchaValue);
  }

  const [user, setUser] = useState(
    {
        FullName: '', Email:'', Message:''
    }
  )
  
  console.log(user)
  let name, value
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]: value});
  }
  //post method for sending data to the realtime database
  const getData = async (e) => {
    const {FullName, Email, Message} = user;
    e.preventDefault();
    const options = {
        method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            FullName, Email, Message
        })
    }
  
    const res = await fetch('https://contact-form-37435-default-rtdb.firebaseio.com/UserData.json',
        options
    )
    console.log(res)
    if (res){
        alert('Message Stored')
    }else{
        alert('Error Occured')
    }
  }
  
 
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" 
             placeholder="Name" 
             value={user.FullName} 
             onChange={data}
            />

            <label>Email</label>
            <input type="email" 
             placeholder="Email" 
             value={user.Email} 
             onChange={data}
            />

            {/* <label>Subject</label>
            <input type="text" 
             placeholder="Subject" 
             onChange={handleInputChange}
             value={subject}

            /> */}

            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" value={user.Message} onChange={data}/>
            <div className="send-btn-container">
                <ReCAPTCHA className="my-recaptcha" sitekey="6LeKb3IpAAAAAN_9K8pJxKSMuSCD1HyKlQLBaSJC" onChange={handleCaptchaChange} />
            </div> 
            <button className="bTNN"   onClick={getData}>Submit</button>
        </form>
    </div>
  )
}

export default Form;
