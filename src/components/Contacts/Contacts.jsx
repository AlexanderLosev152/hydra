import { contacts } from '../../data/contacts.js';
import ContactCard from '../ContactCard/ContactCard.jsx';
import styles from './style.module.scss';
import SwiperWrapper from '../SwiperWripper/SwiperWrapper.jsx';

const Contacts = () => {
	return (
		<>
			<div className={styles.items}>
				{contacts.map((contact, index) => (
					<ContactCard key={`card-${index}`} contact={contact} />
				))}
			</div>

			<div className={styles.bg}>
				<SwiperWrapper data={contacts} className="bg">
					{(item) => <ContactCard contact={item} />}
				</SwiperWrapper>
			</div>
		</>
	);
};

export default Contacts;
