import React from 'react';
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img src="https://reactskawolegal.netlify.app/static/media/kawo-legal-logo.44b98b5a.png" 
                        className="kawologo"/>
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
                           <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login" className="login">Login</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <div className="container kawo4">
                <h2 className="header">Already a member? Login to add your Startup.</h2>
                <form className="form">
                    <div className="form-group">
                        <label for="exampleInputEmail">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password"/>
                    </div><br/>
                    <p>
                        <button type="button" className="btn btn-primary form-group">Sign Up</button>
                    </p>
                </form>
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

export default Login;
