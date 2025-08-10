import styles from './style.module.scss';

import HERO_IMG from '../../../public/images/hero-img.png';
import ARROW_SMALL from '../../../public/images/arrow-small.png';
import Button from '../Button/Button';
import Contacts from '../Contacts/Contacts';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.text}>
						<h1 className={styles.title}>
							<span>Dive</span> Into The Depths Of <span>Virtual Reality</span>
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
							Lectus mauris eros in vitae .
						</p>
						<div className={styles.btnWrapper}>
							<Button title="BUILD YOUR WORLD" />
							<img src={ARROW_SMALL} alt="arrow-small" />
						</div>
					</div>

					<div className={styles.heroImg}>
						<img src={HERO_IMG} alt="img" />
					</div>
				</div>

				<Contacts />
			</div>
		</section>
	);
};

export default Hero;
