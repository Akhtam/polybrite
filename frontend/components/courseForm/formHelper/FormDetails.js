import React from 'react';

export const FormDetails = ({ handleChange, state }) => {
	return (
		<div>
			<div className='form-detail-content'>
				<label>
					Title:
					<input
						type='text'
						value={state.title}
						onChange={handleChange('title')}
					/>
				</label>
				<br />
				<label>
					City:
					<input type='date' value={state.location.city} />
				</label>
				<br />
				<label>
					Venue:
					<input type='text' value={state.location.venue} />
				</label>
				<br />
				<label>
					Course description:
					<input
						type='text'
						onChange={handleChange('description')}
						value={state.description}
					/>
				</label>
				<br />
			</div>
		</div>
	);
};
