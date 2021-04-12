import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router-dom";

export const Details = () => {
	const { store, actions } = useContext(Context);
	console.log(store.people);
	const { id } = useParams();
	const intId = parseInt(id);
	return (
		<div className="container">
			<div className="card-deck">
				{store.people.map((item, index) => {
					if (id == index) {
						return <h1 className="text-light">{item.name}</h1>;
					}
				})}
			</div>
		</div>
	);
};
