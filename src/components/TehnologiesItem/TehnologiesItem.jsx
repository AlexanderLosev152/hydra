import styles from './style.module.scss';

import Button from '../Button/Button';

const TehnologiesItem = ({ arr }) => {
	return (
		<div className={styles.wrapper}>
			<img className={styles.img} src={arr.img} alt={arr.title} />
			<h3 className={styles.title}>{arr.title}</h3>
			<p className={styles.descr}>{arr.descr}</p>
			<Button title={arr.btn} />
		</div>
	);
};

export default TehnologiesItem;
