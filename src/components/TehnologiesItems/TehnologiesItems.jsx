import { technologies } from '../../data/technologies.js';
import SwiperWrapper from '../SwiperWripper/SwiperWrapper.jsx';
import TehnologiesItem from '../TehnologiesItem/TehnologiesItem.jsx';
import styles from './style.module.scss';

const TechnologiesItems = () => {
	return (
		<>
			<div className={styles.wrapper}>
				{technologies.map((item, index) => (
					<TehnologiesItem key={index} arr={item} />
				))}
			</div>

			<SwiperWrapper data={technologies}>
				{(item) => <TehnologiesItem arr={item} />}
			</SwiperWrapper>
		</>
	);
};

export default TechnologiesItems;
