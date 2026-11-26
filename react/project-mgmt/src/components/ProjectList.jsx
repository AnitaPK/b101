import React, { useEffect, useState } from 'react'
import { getProjects } from '../API/projectApi'
import { TbStatusChange } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const ProjectList = () => {
 // Store all projects
    const [projects, setProjects] = useState([])
    //Store all unique departments 
    const [uniqueDept, setUniqueDept] =useState([])

    // Search and filter states
    const [search, setSearch] = useState("")
    const [dept, setDept] = useState("")
    const [priority, setPriority] = useState("")
    const [status, setStatus] = useState("")

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1)
    const projectsPerPage = 10

// Fetch all projects
    async function fetchData() {
        try {
            const data = await getProjects()
            setProjects(data)
            const uDept = [...new Set(data.map((p)=>p.Department))]
            console.log(uDept)
            setUniqueDept(uDept)
        } catch (error) {
            console.log(error)
        }
    }
     // STEP 1: Search Filter
    let filteredProjects = projects.filter((p) => {
        return (
            p.ProjectName?.toLowerCase().includes(search.toLowerCase()) ||
            p.Details?.toLowerCase().includes(search.toLowerCase())
        )
    })
      // STEP 2: Department Filter
    if (dept !== "") {
        filteredProjects = filteredProjects.filter(
            (p) => p.Department?.toLowerCase() === dept.toLowerCase()
        )
    }

    // STEP 3: Priority Filter
    if (priority !== "") {
        filteredProjects = filteredProjects.filter(
            (p) => p.priority?.toLowerCase() === priority.toLowerCase()
        )
    }

    // STEP 4: Status Filter
    if (status !== "") {
        filteredProjects = filteredProjects.filter(
            (p) => p.status?.toLowerCase() === status.toLowerCase()
        )
    }
        // STEP 5: Pagination
    const totalProjects = filteredProjects.length

    const totalPages = Math.ceil(totalProjects / projectsPerPage)

    const startIndex = (currentPage - 1) * projectsPerPage

    const endIndex = startIndex + projectsPerPage

    const renderProjects = filteredProjects.slice(
        startIndex,
        endIndex
    )

        // Reset page when filters change
    function handleSearch(value) {
        setSearch(value)
        setCurrentPage(1)
    }

        function handleDept(value) {
        setDept(value)
        setCurrentPage(1)
    }

    function handlePriority(value) {
        setPriority(value)
        setCurrentPage(1)
    }

    function handleStatus(value) {
        setStatus(value)
        setCurrentPage(1)
    }


    useEffect(()=>{
        fetchData()
    },[])
    console.log(projects)
    console.log(uniqueDept)
  return (
    <div className="container  mt-4">
           <div className="d-flex justify-content-between mb-3">
                <h3>Project List</h3>

                <button className="btn btn-primary">
                    Add New Project
                </button>
            </div>
 {/* SEARCH AND FILTERS */}
            <div className="row mb-3">

                {/* Search */}
                <div className="col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search project..."
                        value={search}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>

                {/* Department */}
                <div className="col-md-3">
                    <select
                        className="form-select"
                        value={dept}
                        onChange={(e) => handleDept(e.target.value)}
                    >
                        <option value="">All Departments</option>
                        <option value="AI">AI</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Fullstack">Fullstack</option>
                        {uniqueDept.length == 0 ? (<option value="">No Departments</option>) : (
                        <><option value="">All Departments</option>
                            
                            {
                            uniqueDept?.map((d,i)=>(
                        <option key={i} value={d}>{d}</option>

                            ))
                        }</>
                        )}
                        
                    </select>
                </div>

                {/* Priority */}
                <div className="col-md-2">
                    <select
                        className="form-select"
                        value={priority}
                        onChange={(e) => handlePriority(e.target.value)}
                    >
                        <option value="">All Priorities</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                {/* Status */}
                <div className="col-md-2">
                    <select
                        className="form-select"
                        value={status}
                        onChange={(e) => handleStatus(e.target.value)}
                    >
                        <option value="">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In-progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                {/* Reset */}
                <div className="col-md-2">
                    <button
                        className="btn btn-secondary w-100"
                        onClick={() => {
                            setSearch("")
                            setDept("")
                            setPriority("")
                            setStatus("")
                            setCurrentPage(1)
                        }}
                    >
                        Reset Filters
                    </button>
                </div>

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
        {renderProjects?.map((proj,i)=>(
            <tr key={i}>
                <td>{((currentPage-1)*projectsPerPage)+i+1}</td>
                <td>{proj.ProjectName}<br></br>
                    <i>{proj.Details}</i>
                </td>
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

 <div className="d-flex justify-content-between align-items-center">

                <p>
                    Showing {totalProjects === 0 ? 0 : startIndex + 1}
                    {" - "}
                    {Math.min(endIndex, totalProjects)}
                    {" of "}
                    {totalProjects} Projects
                </p>
                <nav>
                    <ul className="pagination">

                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                        </li>

                        {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1
                        ).map((page) => (

                            <li
                                key={page}
                                className={`page-item ${currentPage === page ? "active" : ""}`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            </li>

                        ))}

                        <li className={`page-item ${currentPage === totalPages || totalPages === 0 ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={currentPage === totalPages || totalPages === 0}
                            >
                                Next
                            </button>
                        </li>

                    </ul>
                </nav>
 </div>
    </div>   
  )
}

export default ProjectList