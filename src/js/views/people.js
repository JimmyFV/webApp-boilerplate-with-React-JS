import React, { useContext } from "react";
import { Context } from "../store/appContext";
export const People = () => {
	const { store, actions } = useContext(Context);
	// console.log(store.people);
	return <h1>Hello People</h1>;
};
