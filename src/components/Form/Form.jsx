import { useForm } from 'react-hook-form';
import styles from './style.module.scss';
import Button from '../Button/Button';

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	});
	console.log(errors);

	//const error = formState.errors['email']?.message;
	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit((data) => {
				console.log(data);
			})}
		>
			<input
				{...register('firstName', { required: 'This is required' })}
				type="text"
			/>

			<input
				{...register('lastName', { required: 'This is required' })}
				type="text"
			/>
			<input
				{...register('email', { required: 'This is required' })}
				type="email"
			/>
			<input
				{...register('phoneNumber', { required: 'This is required' })}
				type="text"
			/>
			<input
				{...register('subject', { required: 'This is required' })}
				type="text"
			/>
			<textarea name="" placeholder="Tell Us Something..."></textarea>
			<Button title={'SEND TO HYDRA'} type={'submit'} />
			<p>{errors.firstName?.message}</p>
		</form>
	);
};

export default Form;
