import styles from './style.module.scss';
import LOGO from '../../../public/images/logo.svg';
import FaceBookIcon from '../../icon/FaceBookIcon';
import Arrow from '../Arrov/Arrow';

const Logo = () => {
	const alt = 'logo';
	return (
		<div className={styles.logo}>
			<a href="#">
				<img src={LOGO} alt={alt} />
			</a>
		</div>
	);
};

export default Logo;
