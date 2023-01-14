import React from 'react'
import Home from './Home.js'
import Navigationbar from './Navigationbar.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Languages  from './Languages.js'
import SignUp from './SignUp.js'
import Login from './Login.js'
import Calculator from './Calculator.js'

export default function App() {
  return (
    <div>
      <BrowserRouter>
           <Navigationbar />
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path='/languages' element={<Languages/>}/>
               <Route path='/calculator' element={<Calculator/>}/>
               <Route path='/sign_up' element={<SignUp/>}/>
               <Route path='/login' element={<Login/>}/>
           </Routes>
      </BrowserRouter>
    </div>
  )
}
