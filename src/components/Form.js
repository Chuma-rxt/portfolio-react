import "./FormStyles.scss";

import React from 'react';

function Form ()  {

  const handleSubmit = () => {}

  const handleInputChange = () => {}
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="Name" onChange={handleInputChange}></input>

            <label>Email</label>
            <input type="email" placeholder="Email" onChange={handleInputChange}></input>

            <label>Subject</label>
            <input type="text" placeholder="Subject" onChange={handleInputChange}></input>

            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" />
            <button className="bTNN" onSubmit={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Form;
