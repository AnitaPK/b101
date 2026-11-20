import React from 'react'
import userimg from '../assets/userIMG.png'

const Header = ({data}) => {
  return (
    <div className='container' style={{height:"85vh"}}>
        <div className="row">
            <div className="col p-5 text-center">
                <h1 className='text-center m-4 customHeading'>
                    {data.name}
                </h1>
                <p className='lead'>
                    {data.about}
                </p>
                <button className='btn btn-primary'>More Info</button>
            </div>
            <div className="col">
                <img src={userimg} alt="user image" className='img-fluid rouded-circle'/>
            </div>

        </div>
    </div>
  )
}

export default Header