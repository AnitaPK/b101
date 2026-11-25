import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://674e84f1635bad45618eebc1.mockapi.io/api/v1/",
    headers:{
        "Content-Type":"application/json"
    },
    timeout: 10000
})
export default axiosInstance



// fetch('',{
//     method:"",
//     data:{}
// })
// .then(res=>res.json())
// .then(data=>)

