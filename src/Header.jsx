import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import logo from './logo2.png'
import config from './config/config'

const Header = () => {
    function logout() {
        config.auth().signOut().then(function () {
            window.location.reload()
        }).catch(function (error) {
            // An error happened.
        });
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-blue">
                <Link to="/"><img id="image" className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" src={logo} /></Link>

                <Link to="/" className="navbar-brand">Home</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="ul" className="navbar-nav mr-auto">
                        <li className="nav-item active">

                            {/* < to="/aboutUs"> Home </> */}

                            <Link to="/aboutUs" className="navbar-brand" >About Us</Link>

                        </li>
                        <li className="nav-item">

                            <Link className="navbar-brand" to="/contactUs"  >Contact Us</Link>

                        </li>




                        {/* <Link id="signUP" to="/aboutUs" className="navbar-brand" to="/SignUp" >Sign Up</Link> */}

                        <li className="nav-item dropdown">
                            <a className="navbar-brand dropdown-toggle" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Action
                             </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link id="loginID" to="/aboutUs" className="dropdown-item" to="/login" >Login</Link>

                                <Link id="logout" to="/" className="dropdown-item" onClick={logout}>LogOut</Link>

                            </div>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </>
    );
}

export default Header;