import styles from "./Social.module.css";
import icon from "@/assets/imgs/x.png";

export default function XIcon({ link }) {
    if (!link) return null;
    return (
        <div className={styles.socialItem} onClick={() => window.open(link, "_blank")}>
            <img src={icon} alt="X" />
        </div>
    );
}
