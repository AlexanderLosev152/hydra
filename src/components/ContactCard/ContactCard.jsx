import styles from './style.module.scss';

const ContactCard = ({ contact }) => {
	return (
		<div className={styles.item}>
			<img src={contact.img} alt={contact.title} className={styles.icon} />
			<div className={styles.info}>
				<h3 className={styles.title}>{contact.title}</h3>
				{contact.title.includes('Call') ? (
					<a href={`tel:${contact.address}`} className={styles.address}>
						{contact.address}
					</a>
				) : contact.title.includes('Message') ? (
					<a href={`mailto:${contact.address}`} className={styles.address}>
						{contact.address}
					</a>
				) : (
					<span className={styles.address}>{contact.address}</span>
				)}
			</div>
		</div>
	);
};

export default ContactCard;
