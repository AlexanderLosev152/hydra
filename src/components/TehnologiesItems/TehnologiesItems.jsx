import { technologies } from '../data/technologies';
import styles from './style.module.scss';

const TechnologiesItems = () => {
	return (
		<div className={styles.wrapper}>
			{technologies.map((item, index) => (
				<TechnologiesItem key={`card-${index}`} img={item.img} />
			))}
		</div>
	);
};

export default TechnologiesItems;
