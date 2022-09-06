import React from 'react';

import { Link, NavLink } from 'react-router-dom';

function Nav() {
	const [toggle, setToggle] = React.useState(true);

	let style = {
		right: toggle ? '-100%' : '0',
	};

	return (
		<nav className={'dark'}>
			<Link className={'logo'} to={'/'}>
				Logo
			</Link>

			<div className="link-wrapper">
				<NavLink to={'/'} activeclassname={'active'}>
					Home
				</NavLink>
				<NavLink to={'/list'} activeclassname={'active'}>
					List
				</NavLink>
				<NavLink to={'/admin'} activeclassname={'active'}>
					Admin
				</NavLink>
			</div>
			<div className="drop-down" onClick={() => setToggle(!toggle)}>
				{' '}
				Drop{' '}
			</div>
			<div className="side-bar" style={style}>
				<Link to={'/'}>Home</Link>
				<Link to={'/list'}>List</Link>
				<Link to={'/admin'}>Admin</Link>
			</div>
		</nav>
	);
}

export default Nav;
