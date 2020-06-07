import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContextProvider } from './context/user/UserContext';
import { AlertContextProvider } from './context/AlertContext';

ReactDOM.render(
	<React.StrictMode>
		<AlertContextProvider>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</AlertContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
