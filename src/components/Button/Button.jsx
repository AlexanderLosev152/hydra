import styles from './style.module.scss';

const Button = ({ title }) => {
	return (
		<a className={styles.btn} href="#">
			{title}
		</a>
	);
};

export default Button;
