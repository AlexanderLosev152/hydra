import styles from './style.module.scss';

const Button = ({ title, type }) => {
	return (
		<button className={styles.btn} type={type}>
			{title}
		</button>
	);
};

export default Button;
