import React, { useState } from 'react'
import firstImg from '../assets/firstPage.jpeg'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState()
    const [email, setEmail] =useState()
    const [password, setPassword] = useState()
    function handleRegister(event){
        event.preventDefault()
        console.log(name)
        const payload = {
            name:name,
            email:email,
            password:password
        }
        console.log(payload)
        localStorage.setItem('ecomUser', JSON.stringify(payload))
    }
    return (
        <div className='container p-5 mt-5'  style={{height:"90vh",backgroundColor:"#fff4f4"}}>
            <div className="row">
                <div className="col">
                    <img src={firstImg} alt="" className='customImg'/>
                </div>
                <div className="col" style={{paddingTop:"100px"}}>
                    <h2 className='mb-5'>REGISTER HERE...</h2>
                    <form onSubmit={handleRegister}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" 
                            id="floatingInput1" placeholder="enter your name" 
                            onChange={(e)=>setName(e.target.value)}
                            />
                            <label htmlFor="floatingInput1">Your Name</label>
                        </div>
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
                         <input type="submit" className="btn btn-primary me-3" value="REGISTER" />
                         <Link to='/'>If Already Registered</Link>
                         </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register