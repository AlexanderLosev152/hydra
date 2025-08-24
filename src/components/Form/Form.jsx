//import { useForm } from 'react-hook-form';

import styles from './style.module.scss';

const Form = () => {
	return (
		<form className={styles.form}>
			<input type="text" placeholder="First Name" />
			<input type="text" placeholder="Last Name" />
			<input type="email" placeholder="Email" />
			<input type="tel" placeholder="Phone Number" />
            <textarea name="" placeholder='Tell Us Something...'></textarea>
            <div className={styles.btn}>
                <button type="submit">SEND TO HYDRA</button>
            </div>

		</form>
	);
};

export default Form;
