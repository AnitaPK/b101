import React from 'react'

const ContactMe = () => {
  return (
    <>
        <h2 className='headingTwo'>Contact Me</h2>
    <div className="container w-50 p-5 my-5 " style={{backgroundColor:"#d8d8d8"}}>
    <form action="">
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    </form>
    </div>
    </>
  )
}

export default ContactMe