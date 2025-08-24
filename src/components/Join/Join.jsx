import Form from '../Form/Form';
import Title from '../Title/Title';
import styles from './style.module.scss';
import Line from "../Line/Line.jsx";

const Join = () => {
	return (
		<section className={styles.join}>
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.title}>
						<Title top={'JOIN HYDRA'} />
                        <Line />
						<h4 className={styles.descr}>Let’s Build Your VR Experience</h4>
					</div>

					<Form />
				</div>
			</div>
		</section>
	);
};

export default Join;
