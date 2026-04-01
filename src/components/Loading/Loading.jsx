import styles from "./Loading.module.css";
import logo from "../../../public/logo.svg";
export default function Loading({loading}) {
    return (
        <div className={`${styles.overlay} ${loading ? styles.visible : ""}`}>
            <img
                className={`${styles.logo} ${loading ? styles.rotating : ""}`}
                src={logo}
                alt="logo"
            />
        </div>
    );
}