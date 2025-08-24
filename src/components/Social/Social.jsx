import FaceBookIcon from "../../icon/FaceBookIcon.jsx";
import TwitterIcon from "../../icon/TwitterIcon.jsx";
import In from "../../icon/In.jsx";
import YouTube from "../../icon/YouTube.jsx";
import Instagramm from "../../icon/Instagramm.jsx";
import Pinterest from "../../icon/Pinterest.jsx";

import styles from "./style.module.scss";

const Social = () => {
    return <div className={styles.wrapper}>
        <a href="#"><FaceBookIcon /></a>
        <a href="#"><TwitterIcon /></a>
        <a href="#"><In/></a>
        <a href="#"><YouTube /></a>
        <a href="#"><Instagramm /></a>
        <a href="#"><Pinterest /></a>
    </div>
}

export default Social;