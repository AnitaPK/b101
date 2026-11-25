import React, { useEffect, useState } from 'react'
import { getProjects } from '../API/projectApi'
import { TbStatusChange } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const ProjectList = () => {
    const [projects,setProjects] = useState([])

    async function fetchData(){
        const data = await getProjects()
        setProjects(data)
    }

    useEffect(()=>{
        fetchData()
    },[])
    console.log(projects)
  return (
    <div className="container">
            <div className="container">
                <button className='btn btn-primary'>Add New Project</button>
            </div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Project Title</th>
      <th scope="col">Department</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope="col">priority</th>
      <th scope="col">Status</th>
      <th scope='col'>Actions</th>
    </tr>
  </thead>
  <tbody>
        {projects?.map((proj,i)=>(
            <tr key={i}>
                <td>{i+1}</td>
                <td>{proj.ProjectName}</td>
                <td>{proj.Department}</td>
                <td>{proj.startDate}</td>
                <td>{proj.EndDate}</td>
                <td>{proj.priority}</td>
                <td>{proj.status}</td>
                <td>
                    <button className='btn btn-primary me-2' title='update Status'>
                        <TbStatusChange />
                    </button>
                     <button className='btn btn-success me-2' title='Edit Status'>
                        <FaEdit />
                    </button>
                    <button className='btn btn-danger' title='Edit Status'>
                        <MdDelete />
                    </button>
                </td>
            </tr>
        ))}
  </tbody>
</table>
 
    </div>   
  )
}

export default ProjectList