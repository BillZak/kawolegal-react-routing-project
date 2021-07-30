import React from 'react';
import { Link } from "react-router-dom";
import sleek from '../Images/sleek.png'
import think from '../Images/think.png'
import slate from '../Images/imgkawo.jpeg'
import './Startup.css'

const Startup = () => {
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
                   <Link to="/startup" className="startup">Startups</Link>
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
      
      <div className="container">
	  <div className="input-group searchbar">
		  <input type="text" className="form-control" placeholder="Search Startup by name or industry" aria-describedby="basic-addon2"/>
		  <span className="input-group-addon" id="basic-addon2" style={{backgroundColor: 'dodgerblue', color: 'white'}}>Search</span>
	  </div>
	  </div>

	  <div className="container kawo2">
	  	 <div className="row">
	  	 	<div className="col-md-2">
                   <img src={think} className="img-responsive"/>
            </div>
	  	 	<div className="col-md-10">
	  	 		<h2 className="head">Think and Zoom</h2>
	  	 		<p>Providing solutions to the visually impaired,such as mind 
					   controlling zoom,and wearable controlled zoom</p>
	  	 		<p>
				  <button type="button" className="btn btn-default btn-lg">See full details</button>
				</p><hr/>
	  	 	</div>
	  	 </div>
	  	  <div className="row">
	  	 	<div className="col-md-2">
                   <img src={slate} className="img-responsive"/>
            </div>
	  	 	<div className="col-md-10">
	  	 		<h2 className="head">Slatecube</h2>
	  	 		<p>Slatecube helps job seekers develop job relevant skills,gain work experience,
					   and land well paying jobs through world className up-skilling courses and internship. </p>
	  	 		<p>
				  <button type="button" className="btn btn-default btn-lg">See full details</button>
				</p><hr/>
	  	 	</div>
	  	 </div>
	  	  <div className="row">
	  	 	<div className="col-md-2">
                   <img src={sleek} className="img-responsive"/>
            </div>
	  	 	<div className="col-md-10">
	  	 		<h2 className="head">Sleekjob Academy</h2>
	  	 		<p>Trains world className developers in Ghana and matches them to job opportunities. </p>
	  	 		<p>
				  <button type="button" className="btn btn-default btn-lg">See full details</button>
				</p><hr/>
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

export default Startup;
