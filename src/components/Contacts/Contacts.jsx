import styles from './style.module.scss';
import { contacts } from '../../data/contacts.js';

const Contacts = () => {
	return (
		<>
			<div className={styles.items}>
				{contacts.map((contact, index) => (
					<div key={index} className={styles.item}>
						<img
							src={contact.img}
							alt={contact.title}
							className={styles.icon}
						/>
						<div className={styles.info}>
							<h3 className={styles.title}>{contact.title}</h3>
							<a href="#" className={styles.address}>
								{contact.address}
							</a>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Contacts;
