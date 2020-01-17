import React from 'react';

const CourseIndexItem = ({ course, history }) => {
	const { title, startDate, photoUrl } = course;
	const { city, venue } = JSON.parse(course.location);
	const dayMonth = new Date(startDate)
		.toDateString()
		.split(' ')
		.slice(0, 3);
	const loctime = new Date(startDate).toLocaleTimeString().split(' ');
	const time = loctime[0].slice(0, 4) + loctime[1];
	return (
		<div className='course-item-box'>
			<div className='item-box'>
				<section>
					<aside>
						<img
							src={photoUrl}
							className='photo-item'
							onClick={() => history.push(`courses/${course.id}`)}
						/>
					</aside>
					<main>
						<div className='start-date-show'>
							{[...dayMonth, time].join(' ')}
						</div>
						<div className='course-title'>
							<h3
								onClick={() =>
									history.push(`courses/${course.id}`)
								}
							>
								{title}
							</h3>
						</div>
						<div className='course-address'>{`${city}, ${venue}`}</div>
					</main>
				</section>
			</div>
		</div>
	);
};

export default CourseIndexItem;
