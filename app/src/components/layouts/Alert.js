import React, { useContext } from 'react';
import { AlertContext } from '../../context/AlertContext';

function Alert() {
	const { alert } = useContext(AlertContext);

	return (
		alert && (
			<div className={`alert alert-${alert.type}`}>
				<i className="fas fa-info-circle" /> {alert.msg}
			</div>
		)
	);
}

export default Alert;
