import React from 'react';

const Header = () => {
	return (
		<div className='top-header'>
			<div className='main-page'>
				<header className='home-header'>
					<main className='name-description'>
						<div className='poly-name-p'>
							<h1 className='mission-header'>Master new Skill</h1>
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
						<img src='https://drwfxyu78e9uq.cloudfront.net/usercontent/nutrify/media/images/cedf0c4-colina-organismo.jpg' />
					</aside>
				</header>
			</div>
		</div>
	);
};

export default Header;
