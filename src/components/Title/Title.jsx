import styles from './style.module.scss';

const Title = ({ top, span, children }) => {
	return (
		<h2 className={styles.title}>
			{top}
			<span>
				{span}
				{children}
			</span>
		</h2>
	);
};

export default Title;
