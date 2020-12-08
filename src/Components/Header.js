import React from "react";
import { Link, Route, Switch } from "react-router-dom";

function Header () {
    return(
        <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#4AAAA5"}} >
            <div className="container">
               
      <a className="navbar-brand" href="/" id="logo">Reyna Garcia</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
               
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Portfolio</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">About</Link>
                        </li>
                        
                    </ul>
                </div>
                
    </div>
        </nav>


    ); 
}

export default Header; 