import React from 'react';

import {
	produceTopics,
	produceCategories,
	produceSize
} from './categoryHelper';

export const DetailsForm = ({ handleChange, state }) => {
	const categories = produceCategories();
	const topics = categories.length ? produceTopics(state.categoryId) : '';
	const size = produceSize();

	return (
		<div className='form-detail-content'>
			<label>
				<span className='required'>Requirements</span>
				<input
					type='text'
					value={state.requirements}
					onChange={handleChange('requirements')}
				/>
			</label>
			<label>
				<span className='required'>About Instrucor</span>
				<input
					type='text'
					value={state.aboutCreator}
					onChange={handleChange('aboutCreator')}
				/>
			</label>

			<label>
				<span className='required'>Start Date And Time</span>
				<div className='start-date'>
					<input
						type='date'
						value={state.startDate}
						onChange={handleChange('startDate')}
					/>
					<input
						type='time'
						value={state.starTime}
						onChange={handleChange('startTime')}
					/>
				</div>
			</label>

			<label>
				<span className='required'>Course Size</span>
				<select onChange={handleChange('size')} className='size'>
					<option defaultValue='selected'>{state.size}</option>
					{size}
				</select>
			</label>
			<label>
				<span className='required'>Category</span>
				<select
					onChange={handleChange('categoryId')}
					className='category'
				>
					<option defaultValue='selected'>Select Category</option>
					{categories}
				</select>
			</label>
			<label>
				<span className='required'>Topic</span>

				<select
					className='topic'
					onChange={handleChange('topicId')}
					value={state.topicId}
				>
					<option defaultValue='selected'>Select Topic</option>
					{topics}
				</select>
			</label>
		</div>
	);
};
