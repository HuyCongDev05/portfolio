import styles from "./Social.module.css";
import icon from "@/assets/imgs/telegram.png";

export default function Telegram({ link }) {
    if (!link) return null;
    return (
        <div className={styles.socialItem} onClick={() => window.open(link, "_blank")}>
            <img src={icon} alt="Telegram" />
        </div>
    );
}
