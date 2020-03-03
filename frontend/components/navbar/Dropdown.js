import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export const Dropdown = ({ handleLogout, redirectToProfile, open, user }) => {
	let showOrNot = open ? 'block' : 'none';
	return (
		<div className='dropdown-container' style={{ display: showOrNot }}>
			<div className='dropdown-content'>
				<div className='dropdown-elem user-firstname'>
					{user.firstName}
				</div>
				<hr />

				<div className='dropdown-elem' onClick={redirectToProfile}>
					Profile
				</div>
				<div
					className='dropdown-elem logout-btn'
					onClick={handleLogout}
				>
					Logout
					<FontAwesomeIcon icon={faSignOutAlt} />
				</div>
			</div>
		</div>
	);
};
