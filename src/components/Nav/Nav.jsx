import styles from './style.module.scss';

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<a href="#">ABOUT</a>
				</li>
				<li>
					<a href="#">SERVICES</a>
				</li>
				<li>
					<a href="#">TECHNOLOGIES</a>
				</li>
				<li>
					<a href="#">HOW TO</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
