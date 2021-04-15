import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Cardplanets = props => {
	return (
		<div className="card">
			<img
				src="https://smoda.elpais.com/wp-content/uploads/2019/12/2-look-750x702.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.var1}</h5>
				<p className="card-text">{props.var2}</p>
				<p className="card-text">{props.var3}</p>
				<Link to={"/details/" + props.id}>
					<button className="btn btn-primary">Learn More</button>
				</Link>
			</div>
		</div>
	);
};

Cardplanets.propTypes = {
	var1: PropTypes.string,
	var2: PropTypes.number,
	var3: PropTypes.number,
	id: PropTypes.number
};
