// import styles from './style.module.scss';

import Heading from '../Headind/Heading';

const HeadingBox = ({ text }) => {
	return (
		<div>
			<Heading />
			<p>{text}</p>
		</div>
	);
};

export default HeadingBox;
