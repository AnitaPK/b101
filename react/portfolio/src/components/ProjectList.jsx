import React from 'react'
import { Link } from 'react-router-dom';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

const ProjectList = ({ projectsList }) => {
    return (
        < section  style={{height:"85vh"}}>
            <h2 className='headingTwo'>ProjectList</h2>
            <div className="container">
                <div className="row justify-content-center align-items-center g-2">
                    {
                        projectsList.map((pro, i) => (
                            <div className="col" key={i} >
                                <div className="card" style={{width: "18rem", backgroundColor:"#e1e1e1"}}>
                                    <img src={pro.image} className="card-img-top" alt={pro.title} 
                                        style={{height:"10rem"}}
                                    />
                                        <div className="card-body">
                                            <h5 className="card-title customProjectName">{pro.title}</h5>
                                            <p><span className='badge text-bg-success'>{pro.category}</span></p>
                                            <p>
                                                <a href={pro.githubLink} target='_blank'
                                                title="go to github link"
                                                className='customIcon'
                                                >
                                                    <FaSquareGithub />
                                                </a>
                                                <a href={pro.liveLink} target='_blank'
                                                title="Go to Live Demo"
                                                className='customIcon'
                                                
                                                >
                                                    <FaLocationArrow />
                                                </a>
                                            </p>
                                            <Link to={`/projects/${pro.id}`} className="btn btn-outline-primary">Read More</Link>
                                        </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectList