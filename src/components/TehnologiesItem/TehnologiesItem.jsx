import styles from './style.module.scss';

import Button from '../Button/Button';

const TehnologiesItem = (img, title, descr, btn) => {
	return (
		<div className={styles.wrapper}>
			<img src={img} alt={title} />
			<h3>{title}</h3>
			<p>{descr}</p>
			<Button title={btn} />
		</div>
	);
};

export default TehnologiesItem;
