import React from 'react'


const Certificates = ({ data }) => {
    return (
        <>
            <h2 className='headingTwo'>Certificates</h2>
            <div className="container">
                <div className="row justify-content-center align-items-center g-2">
                    {
                        data.map((cer, i) => (
                            <div className="col" key={i}>
                                <div className="card text-bg-primary mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">{cer.organization}</div>
                                    <div className="card-body">
                                        <h5 className="card-title">{cer.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Certificates