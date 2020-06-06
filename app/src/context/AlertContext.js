import React, { useState } from 'react';

const AlertContext = React.createContext();

function AlertContextProvider(props) {
	const [ alert, setAlert ] = useState(null);

	function handleAlert(msg, type) {
		setAlert({ msg, type });
		setTimeout(() => {
			setAlert(null);
		}, 5000);
	}

	return <AlertContext.Provider value={{ alert, handleAlert }}>{props.children}</AlertContext.Provider>;
}

export { AlertContextProvider, AlertContext };
