import React from 'react'
import {Link} from 'react-router-dom'

const  Header = () => {
    const Navbar = ()=>{
           return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Logo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item ">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item ">
                    <Link className="nav-link" to="/sign-in">Sign In</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="sign-up">Sign Up</Link>
                    </li>
                  
                </ul>
                   
            </div>
          </nav>
           
    };

    return (<header id='header'>{ Navbar() }</header>);
}

export default Header;
