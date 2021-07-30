import React from 'react';
import { Link } from "react-router-dom";
import './Register.css'

const Register = () => {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" 
                    data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" 
                    aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img src="https://reactskawolegal.netlify.app/static/media/kawo-legal-logo.44b98b5a.png" className="kawologo"/>

                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                    </ul>
                    <ul className="nav navbar-nav navbar-right links">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                           <Link to="/startup">Startups</Link>
                        </li>
                        <li>
                           <Link to="/register" className="register">Register</Link> 
                        </li>
                        <li>
                           <Link to="/login">Login</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <div className="container kawo3">
                <div className="row">
                    <h2>Join KawoLegal. Sign up to get your startup listed now!</h2>
                </div>
                <div className="row">
                <form className="form">
                    <div className="form-group">
                        <label for="exampleInputfullname">Full Name</label>
                        <input type="text" className="form-control" id="exampleInputfullname" placeholder="Full Name"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/><br/>
                        <p>
                            <button type="button" className="btn btn-primary">Sign Up</button>
                        </p>
                    </div>
                </form>
                </div>
            </div>

            <div className="container-fluid foot">
                <div className="row">
                    <div className="col-md-6"><p>&#169; 2017 KawoLegal.All Rights Reserved</p></div>
                    <div className="col-md-6 icons">
                        <ul className="nav navbar-nav navbar-right sociallinks">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                    </div>
                    </div>
                </div>
      </div>
    );
}

export default Register;
