import React from 'react'
import {Navbar,Nav,Container,Button} from 'react-bootstrap';
import './Navigationbar.css';
import { Link } from 'react-router-dom';
import Boot from './boot.png'

 const Navigationbar = () => {
  return (
    <div>
           <Navbar bg='primary' className='fixed'>
             <Container>
             <Link to='/' className='a'><Navbar.Brand><img src={Boot} alt='Logo' className='bootimg'/></Navbar.Brand></Link>
                  <Nav className='left'>
                      <Nav.Item className='navi'>
                                <Link to='/languages' className='a'><Button className='btn btn-warning' >Languages</Button></Link>
                      </Nav.Item>
                      <Nav.Item className='navi'>
                                <Link to='/calculator' className='a'><Button className='btn btn-warning'>Calculator</Button></Link>
                      </Nav.Item>
                      <Nav.Item className='navi'>
                                <Link to='sign_up' className='a'><Button className='btn btn-warning'>Sign up</Button></Link>
                      </Nav.Item>
                      <Nav.Item className='navi'>
                                 <Link to='login' className='a'><Button className='btn btn-warning'>Login</Button></Link>
                      </Nav.Item>
                  </Nav>
             </Container>
           </Navbar>
    </div>
  )
}
export default Navigationbar
