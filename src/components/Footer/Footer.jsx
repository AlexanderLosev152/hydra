import { footerLinks } from '../../data/footerLinks';
// import { social } from '../../data/social';

import FooterLogo from '../../icon/FooterLogo.jsx';
import FooterLinks from '../FooterLinks/FooterLinks.jsx';
import Button from '../Button/Button.jsx';
import Social from '../Social/Social.jsx';

import styles from './style.module.scss';
import BigLine from '../../icon/BigLine.jsx';

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className={styles.wrapper}>
					<div>
						<FooterLogo />
					</div>
					<FooterLinks arr={footerLinks} />
					<div className={styles.socialBox}>
						<h4 className={styles.socialTitle}>SOCIALIZE WITH HYDRA</h4>
						<Social />
						<Button title={'BUILD YOUR WORLD'} />
					</div>
				</div>
				<div className={styles.line}>
					<BigLine />
				</div>

				<div className={styles.copyRigth}>
					<p>
						2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
						RESERVED{' '}
					</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
