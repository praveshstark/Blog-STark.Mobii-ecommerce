import React from 'react';
import { NavLink } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const Navbar=()=>{
    return(
        <>
        
        <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <NavLink className="navbar-brand" to="/bestdeals" >
        STarK.Mobii</NavLink>
        
        <button className="dot navbar-toggler " 
        type="button" data-toggle="collapse"
         data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <NavLink activeClassName='menu_active' exact className="nav-link" to="/bestdeals">
                Best Deal </NavLink>
            </li>
            <li className="nav-item active">
                <NavLink activeClassName='menu_active' exact className="nav-link" to="/latestmobile">
                Latest Mobile</NavLink>
            </li>
            <li className="nav-item active">
                <NavLink activeClassName='menu_active' exact className="nav-link" to="/review">
                 Reviews</NavLink>
            </li>
            <li className="nav-item active">
                <NavLink activeClassName='menu_active' exact className="nav-link" to="/news">
                News</NavLink>
            </li>
            <li className="nav-item active">
                <a   className="nav-link" href="https://twitter.com/starkxx2" target="_blank">
                <TwitterIcon  style={{fontSize:40}}/>
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="https://www.facebook.com/pravesh.yadav.75286/" target="_blank">
                <FacebookIcon style={{fontSize:40}}/>
                </a>
            </li>

           
        
            </ul>
            
        </div>
        </nav>
        </div>
        </div>
        </div>
    </>
    );
};

export default Navbar;