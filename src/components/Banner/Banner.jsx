import Title from '../Title/Title';

import styles from './style.module.scss';

const Banner = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.box}>
				<Title top={'TECHNOLOGIES & HARDWARE'} span={'USED BY HYDRA VR.'} />
			</div>
		</div>
	);
};

export default Banner;
