import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import menu from '../assets/shared/icon-hamburger.svg';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<div>
				<Link to='/'>
					<img src={logo} alt='Space Tourism' title='Space Tourism'></img>
				</Link>
			</div>
			<div>
				<img src={menu} alt='nav menu button' title='nav menu button'></img>
			</div>
		</header>
	);
};

export default Header;
