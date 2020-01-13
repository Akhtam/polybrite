import React from 'react';

export const AboutForm = ({handleFile, handleChange, state, handleLocation }) => {
	return (
		<div className='form-about-content'>
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
					<input
						type='text'
						value={state.location.city}
						onChange={handleLocation('city')}
					/>
				</label>
				<br />
				<label>
					Venue:
					<input
						type='text'
						value={state.location.venue}
						onChange={handleLocation('venue')}
					/>
				</label>
				<br />
				<label>
					Course description:
					<textarea
						type='text'
						onChange={handleChange('description')}
						value={state.description}
					/>
				</label>
				<br />
				<label>
					Add Photo:
					<input
						onChange={handleFile}
						type='file'
					/>
				</label>
			</div>
		</div>
	);
};
