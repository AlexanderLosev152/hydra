import { companies } from '../../data/companies';

import styles from './style.module.scss';

const Companies = () => {
	return (
		<div className={styles.wrapper}>
			{companies.map((item, index) => (
				<img key={index} src={item.img} alt={item.title} />
			))}
		</div>
	); 
};

export default Companies;
