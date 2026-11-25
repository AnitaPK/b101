import axiosInstance from "./api"
export async function getProjects(){
        const res = await axiosInstance.get("/projects")

    if (res) {
        return res.data
    } else {
       console.log("Error while api fetch") 
    }
} 








// axios.get("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects")
// axios.get("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects/12")
// axios.post("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects",{
    
//     "id": "100",
//     "ProjectName": "MERN Search Engine Feature",
//     "Details": "Elastic search setup",
//     "startDate": "2026-02-10",
//     "EndDate": "2026-03-20",
//     "priority": "Medium",
//     "Department": "Backend",
//     "status": "In-progress"
// })
// axios.delete("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects/100")
// axios.put("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects/100",{
//     status:"completed",
//     startDate:"2027-01-01",
//     EndDate:"2027-02-01"
// })
// axios.patch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects/100",
//     {status:"completed"}
// )
