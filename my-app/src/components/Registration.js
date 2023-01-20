import React from 'react'

function Registration() {
  return (
    <div>
     <form>
      <h1>Register</h1>
      <div className='form-group'>
       <label>Name</label>
       <input 
       type='text'
       className='form-control'
       placeholder='Enter Full Name'
       />
      </div>
      <div className='form-group'>
       <label>E-mail</label>
       <input 
       type='text'
       className='form-control'
       placeholder='Enter E-mail'
       />
      </div>
      <div className='form-group'>
       <label>Password</label>
       <input 
       type='password'
       className='form-control'
       placeholder='Enter Password'
       />
      </div>
      <div className='form-group'>
       <label>Mobile No</label>
       <input 
       type='mobile'
       className='form-control'
       placeholder='Enter mobile no'
       />
      </div>
      <button>Register</button>
     </form>
    </div>
  )
}

export default Registration

