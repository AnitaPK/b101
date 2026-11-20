import React from 'react'
import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase  } from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs"

const PersonalInfo = ({data}) => {
  return (
    <div className="container"  style={{height:"85vh"}}>
         {/* Section Heading */}
            <div className=" mb-5 ">
                <h2 className=" headingTwo">About Me</h2>
                <p className="text-muted text-center">
                    Get to know more about me
                </p>
            </div>
             <div className="row g-4 align-items-stretch">

                {/* Left Section */}
                <div className="col-lg-7">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4 p-md-5">

                            <span className="badge bg-primary mb-3">
                                {data.designation}
                            </span>

                            <h2 className="fw-bold mb-3">
                                Hi, I'm {data.name}
                            </h2>

                            <h5 className="text-primary mb-4">
                                {data.title}
                            </h5>

                            <p className="text-muted lh-lg">
                                {data.shortDescription}
                            </p>

                            <hr className="my-4" />

                            <h5 className="fw-bold mb-3">
                                Professional Summary
                            </h5>

                            <p className="text-muted lh-lg mb-4">
                                {data.about}
                            </p>

                            <div className="d-flex flex-wrap gap-3">

                                <a
                                    href={data.socialLinks.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-dark"
                                >
                                    <FaGithub className="me-2" />
                                    GitHub
                                </a>

                                <a
                                    href={data.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary"
                                >
                                    <BsLinkedin className="me-2" />
                                    LinkedIn
                                </a>

                            </div>

                        </div>
                    </div>
                </div>


                {/* Right Section */}
                <div className="col-lg-5">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4 p-md-5">

                            <h4 className="fw-bold mb-4">
                                Personal Information
                            </h4>

                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-primary-subtle text-primary rounded p-3 me-3">
                                    <FaBriefcase size={20} />
                                </div>
                                <div>
                                    <small className="text-muted">
                                        Experience
                                    </small>
                                    <h6 className="mb-0 fw-semibold">
                                        {data.experience}
                                    </h6>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-primary-subtle text-primary rounded p-3 me-3">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <small className="text-muted">
                                        Email
                                    </small>
                                    <h6 className="mb-0 fw-semibold">
                                        <a
                                            href={`mailto:${data.email}`}
                                            className="text-decoration-none text-dark"
                                        >
                                            {data.email}
                                        </a>
                                    </h6>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-primary-subtle text-primary rounded p-3 me-3">
                                    <FaPhone size={20} />
                                </div>
                                <div>
                                    <small className="text-muted">
                                        Phone
                                    </small>
                                    <h6 className="mb-0 fw-semibold">
                                        <a
                                            href={`tel:${data.phone}`}
                                            className="text-decoration-none text-dark"
                                        >
                                            {data.phone}
                                        </a>
                                    </h6>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-primary-subtle text-primary rounded p-3 me-3">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <small className="text-muted">
                                        Location
                                    </small>
                                    <h6 className="mb-0 fw-semibold">
                                        {data.location}
                                    </h6>
                                </div>
                            </div>

                            <hr />

                            <h6 className="fw-bold mb-3">
                                Professional Highlights
                            </h6>

                            <div className="d-flex flex-wrap gap-2">
                                {
                                    data.technologies.map((t,i)=>(
                                    <span className="badge bg-light text-dark border">
                                    {t}
                                </span>
                                    ))
                                }
                                
                            </div>

                        </div>
                    </div>
                </div>
</div>
</div>
)
}

export default PersonalInfo