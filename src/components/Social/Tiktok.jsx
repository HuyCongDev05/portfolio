import styles from "./Social.module.css";
import icon from "@/assets/imgs/tiktok.png";

export default function Tiktok({ link }) {
    if (!link) return null;
    return (
        <div className={styles.socialItem} onClick={() => window.open(link, "_blank")}>
            <img src={icon} alt="Tiktok" />
        </div>
    );
}
