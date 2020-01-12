import React from 'react';

const categories = {
	Music: ['Guitar', 'Piano', 'Violin', 'Flutes'],
	Tech: ['Javascript', 'Ruby', 'Redux', 'D3'],
	Science: ['Astrobiology', 'Cosmology', 'Galaxies', 'Nebulae'],
	Dance: ['Salsa', 'Tango', 'Ballet', 'Whatever'],
	Art: ['Painting', 'Canvas', 'Photography', 'Sculpture']
};

export const produceCategories = () => {
	return Object.keys(categories).map((category, i) => {
		return <option key={i}>{category}</option>;
	});
};

export const produceTopics = category => {
	return category !== 'Select Category'
		? categories[category].map((topic, i) => (
				<option key={i}>{topic}</option>
		  ))
		: '';
};

export const produceSize = () => {
	let size = [];
	for (let i = 2; i < 21; i++) {
		size.push(<option key={i}>{i}</option>);
	}
	return size;
};
