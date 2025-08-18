import styles from './style.module.scss';

const Title = ({ top, span }) => {
	return (
		<h2 className={styles.title}>
			{top}
			<span>{span}</span>
		</h2>
	);
};

export default Title;
