import "./FormStyles.scss";

import React from 'react';

function Form () {

    const handleSubmit = () => {

    }
    const handleInputChange = () =>{}
  return (
    <section className="contact-section">
        <div className="container">
            <div className="row justify-=content-center">
                <div className="col-md-10">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="contact-wrap w-2100 p-lg-5 p-4">
                                <h3 className="mb-4">Send Me a message</h3>
                                <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" placeholder="Name" onChange={handleInputChange}/>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" placeholder="Email" onChange={handleInputChange}/>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="subject" placeholder="Subject" onChange={handleInputChange}/>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea type="text" className="form-control" name="message" placeholder="Message" onChange={handleInputChange}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="submit" value="Send Message" className="bTNN"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Form;