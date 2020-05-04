import React from 'react';

const Header = () => {
	return (
		<div className='top-header'>
			<header className='home-header'>
				<main className='name-description'>
					<div className='poly-name-p'>
						<h1 className='mission-header'>Master new Skills</h1>
						<p className='mission-description'>
							Are you looking to master new skill? Do you have a
							talent to share with others? With Polybrite, you can
							create and host your own in-person classes or attend
							workshops, events and classes of all kinds from
							people who have hands on knowledge. Start your
							search below!
						</p>
					</div>
				</main>
				<aside className='header-img'>
					<img src={window.testURL} className='main-img' />
				</aside>
			</header>
		</div>
	);
};

export default Header;
