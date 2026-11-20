
import React, { useState } from "react";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiSend,
    FiUser,
    FiMessageSquare,
    FiArrowUpRight
} from "react-icons/fi";

import "./ContactMe.css";

const ContactMe = ({ profile }) => {


    return (
        <section className="contact-section py-5" id="contact">

            <div className="container">

                {/* Section Heading */}
                <div className="text-center mb-5">

                    <span className="contact-subtitle">
                        GET IN TOUCH
                    </span>

                    <h2 className="contact-heading mt-2">
                        Let's Work <span>Together</span>
                    </h2>

                    <p className="contact-description mx-auto">
                        Have a project in mind or want to discuss an opportunity?
                        Feel free to reach out. I'd love to hear from you.
                    </p>

                </div>

                <div className="row g-4 align-items-stretch">

                    {/* Contact Information */}
                    <div className="col-lg-5">

                        <div className="contact-info-card h-100">

                            <h4 className="contact-info-title">
                                Let's Connect
                            </h4>

                            <p className="contact-info-description">
                                I'm always open to discussing new projects,
                                development opportunities, collaborations
                                and technical training.
                            </p>

                            {/* Email */}
                            <div className="contact-info-item">

                                <div className="contact-info-icon">
                                    <FiMail />
                                </div>

                                <div>
                                    <span>Email Me</span>
                                    <a href={`mailto:${profile.email}`}>
                                        {profile.email}
                                    </a>
                                </div>

                            </div>

                            {/* Phone */}
                            <div className="contact-info-item">

                                <div className="contact-info-icon">
                                    <FiPhone />
                                </div>

                                <div>
                                    <span>Call Me</span>
                                    <a href={`tel:${profile.phone}`}>
                                        {profile.phone}
                                    </a>
                                </div>

                            </div>

                            {/* Location */}
                            <div className="contact-info-item">

                                <div className="contact-info-icon">
                                    <FiMapPin />
                                </div>

                                <div>
                                    <span>Location</span>
                                    <p>{profile.location}</p>
                                </div>

                            </div>

                            <div className="contact-bottom-text">
                                <span className="contact-status-dot"></span>
                                Available for opportunities
                            </div>

                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-7">

                        <div className="contact-form-card h-100">

                            <h4 className="contact-form-title">
                                Send Me a Message
                            </h4>

                            <p className="contact-form-description">
                                Fill out the form below and I'll get back to you.
                            </p>

                            <form >

                                <div className="row g-3">

                                    {/* Name */}
                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Your Name
                                        </label>

                                        <div className="contact-input-wrapper">
                                            <FiUser />

                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>

                                    </div>

                                    {/* Email */}
                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Email Address
                                        </label>

                                        <div className="contact-input-wrapper">
                                            <FiMail />

                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="name@example.com"
                                                required
                                            />
                                        </div>

                                    </div>

                                    {/* Subject */}
                                    <div className="col-12">

                                        <label className="form-label">
                                            Subject
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            placeholder="What is this regarding?"
                                            required
                                        />

                                    </div>

                                    {/* Message */}
                                    <div className="col-12">

                                        <label className="form-label">
                                            Message
                                        </label>

                                        <div className="contact-textarea-wrapper">
                                            <FiMessageSquare />

                                            <textarea
                                                className="form-control"
                                                name="message"
                                                rows="5"
                                                placeholder="Write your message here..."
                                                required
                                            />
                                        </div>

                                    </div>

                                    {/* Submit */}
                                    <div className="col-12">

                                        <button
                                            type="submit"
                                            className="contact-submit-btn"
                                        >
                                            Send Message
                                            <FiSend />
                                        </button>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ContactMe;
