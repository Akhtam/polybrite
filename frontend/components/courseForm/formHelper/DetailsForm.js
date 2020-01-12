import React from 'react';

import { produceTopics, produceCategories, produceSize } from './categoryHelper';

export const DetailsForm = ({ handleChange, state }) => {
	const categories = produceCategories();
    const topics = categories.length ? produceTopics(state.categoryId) : '';
	const size = produceSize();
	

	return (
		<div>
			<label>
				Course requirements:
				<textarea
					value={state.requirements}
					onChange={handleChange('requirements')}
				/>
			</label>
			<br />
			<label>
				About Instrucor:
				<textarea
					value={state.aboutCreator}
					onChange={handleChange('aboutCreator')}
				/>
			</label>
			<br />
			<label>
				Course Category:
				<select onChange={handleChange('categoryId')}>
					<option defaultValue='selected'>Select Category</option>
					{categories}
				</select>
			</label>
			<br />

			<label>
				Course Topic:
				<select
					onChange={handleChange('topicId')}
					value={state.topicId}
				>
					<option defaultValue='selected'>Select Topic</option>
					{topics}
				</select>
			</label>
			<br />

			<label>
				Course Size:
				<select onChange={handleChange('size')}>
					<option defaultValue='selected'>{state.size}</option>
					{size}
				</select>
			</label>
		</div>
	);
};
