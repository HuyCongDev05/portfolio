import { useState } from "react";
import styles from "./Home.module.css";
import avatar from "@/assets/imgs/avatar-main.png";
import { Telegram, Github, Linkedin } from "@/components/Social";

export default function Home() {
    const [colorHovered, setColorHovered] = useState(null);
    const [socials] = useState({
        telegram: import.meta.env.VITE_SOCIAL_TELEGRAM,
        github: import.meta.env.VITE_SOCIAL_GITHUB,
        linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN,
    })

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <a href="/" className={styles.logo}>
                    <img src="/logo.svg" alt="logo" />
                </a>
                <h2 className={styles.jobTitle}>tjex</h2>
            </header>

            <aside className={styles.socialSidebar}>
                <Telegram link={socials.telegram} />
                <Github link={socials.github} />
                <Linkedin link={socials.linkedin} />
            </aside>

            <main className={styles.hero}>
                <div className={styles.avatarWrapper}>
                    <div className={`${styles.glowCircle} ${colorHovered ? styles[colorHovered] : ""}`}></div>
                    <img src={avatar} alt="Avatar" className={styles.avatarImg} />
                </div>

                <div className={styles.navLinks}>
                    <div 
                        className={styles.navItem}
                        onMouseEnter={() => setColorHovered("detail")}
                        onMouseLeave={() => setColorHovered(null)}
                    >
                        <span>CHI TIẾT</span>
                    </div>
                    <div 
                        className={styles.navItem}
                        onMouseEnter={() => setColorHovered("project")}
                        onMouseLeave={() => setColorHovered(null)}
                    >
                        <span>DỰ ÁN</span>
                    </div>
                    <div 
                        className={styles.navItem}
                        onMouseEnter={() => setColorHovered("contact")}
                        onMouseLeave={() => setColorHovered(null)}
                    >
                        <span>LIÊN HỆ</span>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; Copyright {new Date().getFullYear()} Nguyen Huy Cong</p>
            </footer>
        </div>
    );
}