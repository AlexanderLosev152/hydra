import Banner from '../Banner/Banner';
import Companies from '../Companies/Companies';
import HeadingBox from '../HeadingBox/HeadingBox';
import TehnologiesItems from '../TehnologiesItems/TehnologiesItems';
import styles from './style.module.scss';

const Tehnologies = () => {
	return (
		<section className={styles.tehnologies}>
			<div className="container">
				<div className={styles.wrapper}>
					<HeadingBox
						top="HOW WE BUILD"
						span="WITH HYDRA VR?"
						text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
					/>
				</div>
				<TehnologiesItems />
				<Banner />
				<Companies />
			</div>
		</section>
	);
};

export default Tehnologies;
