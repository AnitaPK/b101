import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {projectsDetails} from '../data.js'


const ProjectDetails = () => {
    const {ID} = useParams()
    console.log(ID)
    console.log(projectsDetails)
    const project = projectsDetails.find((p)=>p.projectId == ID)
    console.log(project)
  return (
    <>
    <div>ProjectDetails</div>
    <h1>{ID}</h1>
    <h2>{project?.title}</h2>
    </>
  )
}

export default ProjectDetails