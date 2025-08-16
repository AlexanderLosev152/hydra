import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './style.module.scss';
import Arrow from '../Arrov/Arrow';

const SwiperWrapper = ({ data, children }) => {
	return (
		<div className={styles.wrapper}>
			<Swiper
				modules={[Navigation]}
				navigation={{
					nextEl: `.${styles.swiperButtonNext}`,
					prevEl: `.${styles.swiperButtonPrev}`
				}}
				loop={true}
				className={styles.swiper}
			>
				{data.map((item, index) => (
					<SwiperSlide key={`slide-${index}`} className={styles.slide}>
						{children(item)}
					</SwiperSlide>
				))}
			</Swiper>

			<div className={`${styles.swiperButtonNext} ${styles.swiperButton}`}>
				<Arrow />
			</div>
			<div className={`${styles.swiperButtonPrev} ${styles.swiperButton}`}>
				<Arrow />
			</div>
		</div>
	);
};

export default SwiperWrapper;
