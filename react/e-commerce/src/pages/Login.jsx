import React, { useEffect, useState } from 'react'
import firstImg from '../assets/firstPage.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [regUser, setRegUser] = useState()
    const navigate = useNavigate()

    function fetchUsers(){
       const regUser1 = JSON.parse(localStorage.getItem('ecomUser'))
       console.log(regUser1)
       setRegUser(regUser1)
    }


    function handleLogin(event){
        event.preventDefault()
        if(email == regUser.email){
            if(password == regUser.password){
                // alert("login")
                navigate('/dashboard')
            }else{
                toast.error("Password wrong")
            }
        }else{
            toast.error("Incorrect Email")
        }
    }

    useEffect(()=>{
        fetchUsers()
    },[])



  return (
    <div className='container p-5 mt-5'  style={{height:"90vh",backgroundColor:"#fff4f4"}}>
            <div className="row">
                <div className="col">
                    <img src={firstImg} alt="" className='customImg'/>
                </div>
                <div className="col" style={{paddingTop:"100px"}}>
                    <h2 className='mb-5'>LOGIN HERE...</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" 
                            id="floatingInput" placeholder="name@example.com" 
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" 
                            id="floatingPassword" placeholder="Password" 
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className='text-center mt-3'>
                         <input type="submit" className="btn btn-primary me-3" value="LOGIN" />
                         <Link to='/register'>If Not Registered</Link>
                         </div>
                    </form>
                </div>

            </div>
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        </div>
  )
}

export default Login