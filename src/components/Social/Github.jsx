import styles from "./Social.module.css";
import icon from "@/assets/imgs/github.png";

export default function Github({ link }) {
    if (!link) return null;
    return (
        <div className={styles.socialItem} onClick={() => window.open(link, "_blank")}>
            <img src={icon} alt="Github" />
        </div>
    );
}
