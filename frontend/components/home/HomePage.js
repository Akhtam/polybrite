import React, { Component } from 'react';

export class HomePage extends Component {
	render() {
		return (
			<div className='top-header'>
				<div className='main-page'>
					<header className='home-header'>
						<main className='name-description'>
							<h1>Polybrite</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</p>
						</main>
						<aside>
							<img
								className='header-img'
								src='https://drwfxyu78e9uq.cloudfront.net/usercontent/nutrify/media/images/cedf0c4-colina-organismo.jpg'
							/>
						</aside>
					</header>
				</div>
			</div>
		);
	}
}
