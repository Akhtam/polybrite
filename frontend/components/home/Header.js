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
							src='https://d3b8hk1o42ev08.cloudfront.net/wp-content/uploads/2018/08/52871508-emisferi-cerebrali-a-destra-%C3%A8-emozioni-intuizioni-creativit%C3%A0-sinistra-%C3%A8-la-logica-la-ragione-verbale-1-1-752x440.jpg'
							className='main-img'
						/>
					</aside>
				</header>
			</div>

	);
};

export default Header;
