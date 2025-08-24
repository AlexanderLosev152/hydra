import { useForm } from 'react-hook-form';
import styles from './style.module.scss';

const Form = () => {
	const { register, handleSubmit, formState } = useForm({
		mode: 'onChange'
	});
	const onSubmit = (data) => {
		console.log(data);
	};

	const error = formState.errors['email']?.message;
	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="First Name" />
			<input type="text" placeholder="Last Name" />
			<input
				type="email"
				placeholder="Email"
				{...register('email', {
					required: 'this filed is required',
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
						message: 'Invalid email address'
					}
				})}
			/>
			<input type="tel" placeholder="Phone Number" />

			<textarea name="" placeholder="Tell Us Something..."></textarea>
			<button type="submit">SEND TO HYDRA</button>
			<div className={styles.btn}></div>

			{error}
		</form>
	);
};

export default Form;
