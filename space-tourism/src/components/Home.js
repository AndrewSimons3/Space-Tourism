import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Header from './Header';
import classes from './Home.module.css';

const Home = () => {
	return (
		<Fragment>
			<section className={classes.home}>
				<Header />
				<div className={classes.overlay}>
					<article>
						<h1>
							SO. YOU WANT TO TRAVEL TO <span>SPACE</span>
						</h1>
						<p>
							Let’s face it; if you want to go to space, you might as well
							genuinely go to outer space and not hover kind of on the edge of
							it. Well sit back, and relax because we’ll give you a truly out of
							this world experience!
						</p>
					</article>
					<article className={classes['explore-container']}>
						<button className={classes['explore-btn']}>
							<Link to='/destination'>Explore</Link>
						</button>
					</article>
				</div>
			</section>
		</Fragment>
	);
};

export default Home;
