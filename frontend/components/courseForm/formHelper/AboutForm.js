import React from 'react';

const AboutForm = ({ handleFile, handleChange, state, handleLocation }) => {
	return (
		<div className='form-about-content'>
			<div className='form-detail-content'>
				<label>
					<span className='required'>Title</span>
					<input
						type='text'
						value={state.title}
						onChange={handleChange('title')}
					/>
				</label>

				<label>
					<span className='required'>Adress</span>
					<input
						type='text'
						value={state.location.city}
						onChange={handleLocation('city')}
					/>
				</label>

				<label>
					<span className='required'>Venue</span>
					<input
						type='text'
						value={state.location.venue}
						onChange={handleLocation('venue')}
					/>
				</label>
				<div className='upload-btn-wrapper'>
					<button className='btn'>Upload a file</button>
					<input type='file' name='myfile' onChange={handleFile} />
					<span>{state.photoFile ? state.photoFile.name : ''}</span>
				</div>

				<label>
					<span className='required'>Course description</span>
					<textarea
						type='text'
						onChange={handleChange('description')}
						value={state.description}
					/>
				</label>
			</div>
		</div>
	);
};

export default AboutForm;
