import ArrowTitle from '../ArrowTitle/ArrowTitle';
import styles from './style.module.scss';

const Heading = () => {
	return (
		<div>
			<h2 className={styles.title}>
				INTRODUCTION{' '}
				<span>
					TO HYDRA VR <ArrowTitle />
				</span>
			</h2>
		</div>
	);
};

export default Heading;
