import React,{useState} from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
   const login =useNavigate();
   const home =useNavigate()
    const [data,setData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
      })
    const {firstName,lastName,email,password,confirmPassword} = data;
    const storeData = (s) => {
            setData({...data,[s.target.name]:[s.target.value]});
    }
    const submitData = (sd) => {
       sd.preventDefault();
       axios.post('https://my-first-project-69d6d-default-rtdb.firebaseio.com/store.json',data).then(()=>home('/'))
    }
  return (
    <center>
    <div className='fdiv'>
       <div className='sdiv'>
         <p className='rp'>Registation form</p>
          <form onSubmit={submitData}>
         <div className='div'>
          <input type='text' name='firstName' value={firstName} placeholder='First Name' onChange={storeData}/>
         </div>
         <div className='div'>
          <input type='text' name='lastName' value={lastName} placeholder='Last Name' onChange={storeData}/>
         </div>
         <div className='div'>
          <input type='email' name='email' value={email} placeholder='E-mail' onChange={storeData}/>
         </div>
         <div className='div'> 
          <input type='password' name='password' value={password} placeholder='Password' onChange={storeData}/>
         </div>
         <div className='div'>
          <input type='password' name='confirmPassword' value={confirmPassword} placeholder='ConfirmPassword' onChange={storeData}/>
          </div>
          <div className='divs'>
          <input type='submit' value='submit' className='btn btn-primary btns'/>
          </div>
          </form>
          <div className='spandiv'>
          <p>Alredy Register : <span onClick={()=>login('/login')} className="btn btn-link span">Login Here</span></p>
          </div>
       </div>
    </div> 
    </center>
  )
}
export default SignUp
