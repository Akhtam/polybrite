import React from 'react';

const Header = () => {
	return (
		<div className='top-header'>
				<header className='home-header'>
					<main className='name-description'>
						<div className='poly-name-p'>
							<h1 className='mission-header'>
								Master new Skills
							</h1>
							<p className='mission-description'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna. Ut enim ad
								minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</main>
					<aside className='header-img'>
						<img
							src={window.testURL}
							className='main-img'
						/>
					</aside>
				</header>
			</div>

	);
};

export default Header;
