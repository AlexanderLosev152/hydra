import Title from '../Title/Title';
import ArrowTitle from '../ArrowTitle/ArrowTitle';
import styles from './style.module.scss';

const HeadingBox = ({ top, span, text }) => {
	return (
		<div className={styles.wrapper}>
			<Title top={top} span={span} children={<ArrowTitle />} />
			<p className={styles.descr}>{text}</p>
		</div>
	);
};

export default HeadingBox;
