import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import iconNotFound from "@/assets/svgs/iconNotFound.svg";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <img src={iconNotFound} alt="404 Not Found" className={styles.icon} />
            </div>
            
            <h2 className={styles.message}>Không tìm thấy trang bạn yêu cầu</h2>
            
            <Link to="/" className={styles.backButton}>
                Quay lại Trang chủ
            </Link>
        </div>
    );
}