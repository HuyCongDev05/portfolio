import styles from "./Social.module.css";
import icon from "@/assets/imgs/Facebook.png";

export default function Facebook({ link }) {
    if (!link) return null;
    return (
        <div className={styles.socialItem} onClick={() => window.open(link, "_blank")}>
            <img src={icon} alt="Facebook" />
        </div>
    );
}
