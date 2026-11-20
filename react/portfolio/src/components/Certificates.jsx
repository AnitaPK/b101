
import React from "react";
import {
    FiAward,
    FiExternalLink,
    FiCalendar,
    FiCheckCircle
} from "react-icons/fi";

import "./Certificates.css";

const Certificates = ({ data = [] }) => {

    return (
        <section className="certificates-section py-5" id="certificates"  style={{height:"85vh"}}>

            <div className="container">

                {/* Section Heading */}
                <div className="text-center mb-5">

                    <span className="certificate-subtitle">
                        MY ACHIEVEMENTS
                    </span>

                    <h2 className="certificate-heading mt-2">
                        Certifications & <span>Achievements</span>
                    </h2>

                    <p className="certificate-description mx-auto">
                        Professional certifications and achievements
                        that reflect my continuous learning and growth.
                    </p>

                </div>

                {/* Certificates */}
                <div className="row g-4">

                    {data.map((cer, index) => (

                        <div className="col-lg-4 col-md-6" key={cer.id || index}>

                            <div className="certificate-card h-100">

                                {/* Card Header */}
                                <div className="certificate-card-header">

                                    <div className="certificate-icon">
                                        <FiAward />
                                    </div>

                                    <span className="certificate-number">
                                        CERTIFICATE {String(index + 1).padStart(2, "0")}
                                    </span>

                                </div>

                                {/* Card Body */}
                                <div className="certificate-card-body">

                                    <div className="certificate-organization">
                                        <FiCheckCircle />
                                        {cer.organization}
                                    </div>

                                    <h5 className="certificate-title">
                                        {cer.title}
                                    </h5>

                                    {cer.description && (
                                        <p className="certificate-text">
                                            {cer.description}
                                        </p>
                                    )}

                                    {cer.date && (
                                        <div className="certificate-date">
                                            <FiCalendar />
                                            {cer.date}
                                        </div>
                                    )}

                                    {/* Footer */}
                                    <div className="certificate-footer">

                                        {cer.credentialId && (
                                            <span className="credential-id">
                                                ID: {cer.credentialId}
                                            </span>
                                        )}

                                        {cer.link && (
                                            <a
                                                href={cer.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="certificate-link"
                                            >
                                                View Certificate
                                                <FiExternalLink />
                                            </a>
                                        )}

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {data.length === 0 && (
                    <p className="text-center text-muted">
                        Certificates will be updated soon.
                    </p>
                )}

            </div>

        </section>
    );
};

export default Certificates;
