import HeadingBox from '../HeadingBox/HeadingBox';
import Links from '../Links/Links';
import styles from './style.module.scss';

const Services = () => {
	return (
		<section>
			<div className="container">
				<div className={styles.wrapper}>
					<HeadingBox
						top="WHY BUILD"
						span="WITH HYDRA?"
						text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
					/>
				</div>

				<Links />
			</div>
		</section>
	);
};

export default Services;
