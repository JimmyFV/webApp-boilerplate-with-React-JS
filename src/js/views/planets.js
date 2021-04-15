import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Cardplanets } from "../component/cardplanets";

export const Planet = () => {
	const { store, actions } = useContext(Context);
	console.log(store.planets);
	return (
		<div className="container">
			<div className="card-deck">
				{store.planets.map((item, index) => {
					return (
						<div key={index} className="col-md-4">
							<Cardplanets var1={item.name} var2={item.rotation_period} var3={item.diameter} id={index} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
