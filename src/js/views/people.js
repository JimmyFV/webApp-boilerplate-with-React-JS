import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const People = () => {
	const { store, actions } = useContext(Context);
	console.log(store.people);
	return (
		<div className="container">
			<div className="card-deck">
				{store.people.map((item, index) => {
					return (
						<div key={index} className="col-md-4">
							<Card var1={item.name} var2={item.hair_color} var3={item.gender} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
