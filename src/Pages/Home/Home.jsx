import { Link } from "react-router-dom";
import './Home.css'
import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="frontimg">
                <div className="opacity">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" 
                        className="navbar-toggle collapsed" 
                        data-toggle="collapse" 
                        data-target="#bs-example-navbar-collapse-1" 
                        aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            <img src="https://reactskawolegal.netlify.app/static/media/kawo-legal-logo.44b98b5a.png" 
                            alt="KawoLegal" className="kawologo"/></a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                        </ul>
                        <ul className="nav navbar-nav navbar-right links">
                            <li>
                                <Link to="/" className="home">Home</Link>
                            </li>
                            <li>
                               <Link to="/startup">Startups</Link>
                            </li>
                            <li>
                               <Link to="/register">Register</Link>
                            </li>
                            <li>
                               <Link to="/login">Login</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                
            
                        <div className="jumbotext">
                            <h1 className="head">KAWOLEGAL</h1>
                            <p className="text">A collaborative ecosystem for problem solvers and support for startups.</p>
                            <Link to="/">
                            <button className="btn btn-primary btn-lg" href="kawo3.html" type="submit">
                                Register Now!
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid foot">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&#169; 2017 KawoLegal.All Rights Reserved</p>
                        </div>
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

export default Home;
