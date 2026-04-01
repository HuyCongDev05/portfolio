import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import iconNotFound from "@/assets/svgs/iconNotFound.svg";
import Button from "@/components/Button/Button";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <img src={iconNotFound} alt="404 Not Found" className={styles.icon} />
            </div>
            
            <h2 className={styles.message}>Không tìm thấy trang bạn yêu cầu</h2>
            
            <Button 
                onClick={() => navigate("/")} 
                borderRadius="20px" 
                hoverColor="#FF0033"
                className={styles.backButton}
                textTransform="none"
            >
                Quay về Trang chủ
            </Button>
        </div>
    );
}