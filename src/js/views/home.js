import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
export const Home = () => (
	<div className="text-center mt-5">
		<h1>STAR WARS</h1>
		<Link to="/my people">
			<button className="btn btn-primary">Go People</button>
		</Link>
		<Link to="/my planets">
			<button className="btn btn-primary">Go Planets</button>
		</Link>
	</div>
);
