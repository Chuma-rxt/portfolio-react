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
                                <h2 className="mb-4">Send Me a message</h2>
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
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="info-wrap w-100 p-lg-5 p-4 img">
                                <h2>Contact Me</h2>
                                <p className="mb-4">Open for any suggestions</p>
                                <div className="dbox w-100 d-flex align-items-start">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-map-marker"></span>
                                    </div>
                                    <div className="text pl-3">
                                        <p>
                                            <span>Address:</span> Langa, Cape Town
                                        </p>
                                    </div>
                                </div>

                                <div className="dbox w-100 d-flex align-items-start">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-phone"></span>
                                    </div>
                                    <div className="text pl-3">
                                        <p>
                                            <span>Phone:</span>+27 733 265 346
                                        </p>
                                    </div>
                                </div>

                                <div className="dbox w-100 d-flex align-items-start">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-paper-plane"></span>
                                    </div>
                                    <div className="text pl-3">
                                        <p>
                                            <span>Email:</span>
                                            <a href="#">craxoti60@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
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