import styles from "./Social.module.css";
import icon from "@/assets/imgs/linkedin.png";

export default function Linkedin({ link }) {
    if (!link) return null;
    return (
        <div className={styles.socialItem} onClick={() => window.open(link, "_blank")}>
            <img src={icon} alt="Linkedin" />
        </div>
    );
}
