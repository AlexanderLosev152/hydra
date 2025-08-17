import styles from './style.module.scss';
import HeadingBox from '../HeadingBox/HeadingBox';
import Button from '../Button/Button';

import IMG from '../../../public/images/about-img.png';
import Title from '../Title/Title';

const About = () => {
	return (
		<div className="container">
			<section className={styles.about}>
				<HeadingBox
					top="INTRODUCTION"
					span="TO HYDRA VR"
					text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
				/>
				<div className={styles.wrapper}>
					<div className={styles.img}>
						<img src={IMG} alt="img" />
					</div>

					<div>
						<Title top="ABOUT" span="HYDRA VR" />
						<p>
							Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
							mattis rhoncus urna neque viverra justo. Vivamus at augue eget
							arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
							Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
							faucibus purus in massa. Est placerat in egestas erat imperdiet
							sed. Consequat semper viverra nam libero justo laoreet sit amet.
							Aliquam etiam erat velit scelerisque in dictum non consectetur a.
							Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
							orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
							adipiscing bibendum. Leo a diam sollicitudi n tempor.
						</p>
						<Button title="LET’S GET IN TOUCH" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
