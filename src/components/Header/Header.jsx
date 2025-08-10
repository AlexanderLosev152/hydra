import styles from './style.module.scss';
import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.wrapper}>
					<Logo />
					<Nav />
				</div>
			</div>
		</header>
	);
};

export default Header;
