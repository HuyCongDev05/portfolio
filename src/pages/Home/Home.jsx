import { useState, useRef } from "react";
import styles from "./Home.module.css";
import avatar from "@/assets/imgs/avatar-main.png";
import { Telegram, Github, Linkedin } from "@/components/Social";
import Detail from "../Detail/Detail";
import Project from "../Project/Project";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    const [colorHovered, setColorHovered] = useState(null);
    const detailRef = useRef(null);
    const projectRef = useRef(null);
    const footerRef = useRef(null);
    const [socials] = useState({
        telegram: import.meta.env.VITE_SOCIAL_TELEGRAM,
        github: import.meta.env.VITE_SOCIAL_GITHUB,
        linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN,
    })

    const scrollToDetail = () => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProject = () => {
        projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    <a href="/" className={styles.logo}>
                        <img src="/logo.svg" alt="logo" />
                    </a>
                    <h2 className={`${styles.jobTitle} ${colorHovered ? styles[colorHovered] : ""}`}>FULLSTACK DEVELOPER</h2>
                </header>

                <aside className={styles.socialSidebar}>
                    <Telegram link={socials.telegram} />
                    <Github link={socials.github} />
                    <Linkedin link={socials.linkedin} />
                </aside>

                <main className={styles.hero}>
                    <div className={styles.avatarWrapper}>
                        <div className={`${styles.glowCircle} ${colorHovered ? styles[colorHovered] : ""}`}>
                            <img src={avatar} alt="Avatar" className={styles.avatarImg} />
                        </div>
                    </div>

                    <div className={styles.navLinks}>
                        <div 
                            className={styles.navItem}
                            onMouseEnter={() => setColorHovered("detail")}
                            onMouseLeave={() => setColorHovered(null)}
                            onClick={scrollToDetail}
                        >
                            <span>CHI TIẾT</span>
                        </div>
                        <div 
                            className={styles.navItem}
                            onMouseEnter={() => setColorHovered("project")}
                            onMouseLeave={() => setColorHovered(null)}
                            onClick={scrollToProject}
                        >
                            <span>DỰ ÁN</span>
                        </div>
                        <div 
                            className={styles.navItem}
                            onMouseEnter={() => setColorHovered("contact")}
                            onMouseLeave={() => setColorHovered(null)}
                            onClick={scrollToContact}
                        >
                            <span>LIÊN HỆ</span>
                        </div>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <p>&copy; Copyright {new Date().getFullYear()} Nguyen Huy Cong</p>
                </footer>
            </div>
            <div ref={detailRef}>
                <Detail />
            </div>
            <div ref={projectRef}>
                <Project />
            </div>
            <div ref={footerRef}>
                <Footer 
                    onScrollToProject={scrollToProject}
                    onScrollToDetail={scrollToDetail}
                />
            </div>
        </>
    );
}