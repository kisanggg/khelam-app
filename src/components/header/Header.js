import React from 'react';
import './header.css';
import logo from '../../images/logo.png';
import signup from '../../images/signup.png';
import { Search } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
const Header = () => {
  return (
    <div className='header'>
      <div className='divv' style={{height:"103px",backgroundColor:"#454242"}}>
        <div className='div-wrapper'>

        </div>
        <div className='div1-wrapper'>
        </div>
        </div>
        <div className='header-wrapper'>
        <img src={logo} alt='err' />
        <div className='wrapper'>
          <h1>KHELAM</h1>
          <p>Khelam to be Healthy</p>
        </div>
     
      </div>
      <div className='sub-header'>
        <div className='signUp' style={{ height: "52px" }}>
          <img src={signup} alt='err' style={{ marginLeft: "530px", width: "20px", height: "20px", marginTop: "10px" }} />
          <a href="/signup" className='nav-link' style={{ textAlign: "end", marginTop: "9px", color: "white", fontSize: "15px",marginLeft:"0px" }}>signup</a>
        </div>
        <div className='navBar'>
          <nav className="nav">
            <Link to="/home" className="nav-link" style={{marginLeft:"10px",color:"white",fontSize:"13px",padding:"15px"}}>HOME</Link>
            <Link to="/about" className="nav-link" style={{color:"white",fontSize:"13px",padding:"15px"}}>ABOUT</Link>
            <Link to="/sports" className="nav-link" style={{color:"white",fontSize:"13px",padding:"15px"}} >SPORTS</Link>
            {/* <NavDropdown title="SPORTS" className="nav-link" style={{color:"white",fontSize:"13px"}}>
              <NavDropdown.Item to='/basketball'>Basketball</NavDropdown.Item>
              <NavDropdown.Item to='/Cricket'>Cricket</NavDropdown.Item>
            </NavDropdown> */}
            <Link to="/contact" className="nav-link" style={{color:"white",fontSize:"13px",padding:"15px"}}  >CONTACT</Link>
            <button style={{ marginLeft: "56px", width: "45px",height:"51px" }}><Search size={30} style={{ color: "white",marginTop:"0px" }} /></button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;