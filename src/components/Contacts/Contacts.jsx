import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { contacts } from '../../data/contacts.js';

import ContactCard from '../ContactCard/ContactCard';
import styles from './style.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

const Contacts = () => {
	return (
		<>
			<div className={styles.items}>
				{contacts.map((contact, index) => (
					<ContactCard key={`card-${index}`} contact={contact} />
				))}
			</div>

			<Swiper
				className={styles.swiper}
				modules={[Navigation]}
				navigation={{
					nextEl: `.${styles.swiperButtonNext}`,
					prevEl: `.${styles.swiperButtonPrev}`
				}}
				loop={true}
			>
				{contacts.map((contact, index) => (
					<SwiperSlide key={`slide-${index}`}>
						<ContactCard contact={contact} />
					</SwiperSlide>
				))}
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</Swiper>
		</>
	);
};

export default Contacts;
