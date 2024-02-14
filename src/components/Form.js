// import React, {useState} from 'react';
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import "./FormStyles.scss";

import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import fireDb from "./firebaseInit"; // Import initialized Firebase app
import "./FormStyles.scss";

function Form ()  {
  const [state, setState] = useState ({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const {name, email, subject, message} = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || subject || !message){
      toast.error("Please provide value in each input field")
    }
  }

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value})
  }
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" 
             placeholder="Name" 
             onChange={handleInputChange} 
             value={name}
            />

            <label>Email</label>
            <input type="email" 
             placeholder="Email" 
             onChange={handleInputChange} 
             value={email}

            />

            <label>Subject</label>
            <input type="text" 
             placeholder="Subject" 
             onChange={handleInputChange}
             value={subject}

            />

            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" />
            <button className="bTNN" onSubmit={handleSubmit } value={message}>Submit</button>
        </form>
    </div>
  )
}

export default Form;
