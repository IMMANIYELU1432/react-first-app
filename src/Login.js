import React,{useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const home = useNavigate();
  const signup = useNavigate();
  const [datal,setDatal] = useState({
    email:'',
    password:'',
  })
const {email,password} = datal;
const storeDatal = (s) => {
        setDatal({...datal,[s.target.name]:[s.target.value]});
}
const submitDatal = (sd) => {
   sd.preventDefault();
   axios.post('https://my-first-project-69d6d-default-rtdb.firebaseio.com/store.json',datal).then(()=>home('/'))
}
  return (
    <center>
    <div className='fadiv'>
        <div className='secdiv'>
        <form onSubmit={submitDatal}>
        <div className='div'>
         <input type='email' name='email' value={email} placeholder='Enter the Email Id' onChange={storeDatal}/>
        </div>
        <div className='div'>
         <input type='password' name='password' value={password} placeholder='Enter the password' onChange={storeDatal}/>
         </div>
         <div className='sdivs'>
         <input type='submit' value='Login' className='btn btn-primary'/>
         </div>
        </form>
        <div className='spandiv'>
        <p>Not a Register : <span onClick={()=>signup('/sign_up')} className="btn btn-link spanl">Sign up</span></p>
        </div>
        </div>
    </div>
    </center>
  )
}
export default Login