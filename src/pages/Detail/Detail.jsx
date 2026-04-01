import React, { useState, useEffect, useRef } from 'react';
import styles from './Detail.module.css';

import htmlImg from '@/assets/imgs/html.png';
import cssImg from '@/assets/imgs/css.png';
import jsImg from '@/assets/imgs/js.png';
import reactImg from '@/assets/imgs/react.png';
import javaImg from '@/assets/imgs/java.png';
import springImg from '@/assets/imgs/spring.png';
import mysqlImg from '@/assets/imgs/mysql.png';
import mongoDbImg from '@/assets/imgs/mongodb.png';
import dockerImg from '@/assets/imgs/docker.png';
import githubImg from '@/assets/imgs/github.png';
import postmanImg from '@/assets/imgs/postman.png';
import pycharmImg from '@/assets/imgs/pycharm.png';
import ngrokImg from '@/assets/imgs/ngrok.png';
import intellijImg from '@/assets/imgs/intellij.png';
import vscodeImg from '@/assets/imgs/vscode.png';
import figmaImg from '@/assets/imgs/figma.png';
import grokImg from '@/assets/imgs/grok.png';
import claudeImg from '@/assets/imgs/claude.png';
import geminiImg from '@/assets/imgs/gemini.png';
import openaiImg from '@/assets/imgs/openai.png';

const SkillScroller = ({ children }) => {
    const containerRef = useRef(null);
    const [shouldScroll, setShouldScroll] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (containerRef.current) {
                const isOverflowing = containerRef.current.scrollWidth > containerRef.current.clientWidth;
                setShouldScroll(isOverflowing);
            }
        };

        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [children]);

    return (
        <div 
            ref={containerRef} 
            className={`${styles.scrollContainer} ${shouldScroll ? styles.isScrolling : ''}`}
        >
            <div className={styles.scrollTrack}>
                <div className={styles.techGrid}>{children}</div>
                {shouldScroll && <div className={styles.techGrid}>{children}</div>}
            </div>
        </div>
    );
};

const Detail = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const scrollToTop = (e) => {
        if (e) e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const timelineData = [
        { 
            title: 'Đại học', 
            institution: 'Công nghệ Đông Á', 
            time: '2023 - 2027'
        },
        { 
            title: 'Khu vực làm việc', 
            institution: 'Hà Nội, Hồ Chí Minh, Thanh Hóa'
        },
        { 
            title: 'Công việc', 
            institution: 'Công ty cổ phần Công nghệ Sapo (Intern)',
            time: "03/2026 - now"
        },
    ];

    return (
        <div 
            className={`${styles.container} ${isVisible ? styles.isVisible : ''}`} 
            ref={sectionRef}
        >
            <header className={styles.header}>
                <a href="/" className={styles.logo} onClick={scrollToTop}>
                    <img src="/logo.svg" alt="logo" />
                </a>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.pageTitle}>CHI TIẾT</h1>
                </div>
            </header>

            <main className={styles.mainContent}>
                <div className={styles.topGrid}>
                    <section className={styles.introSection}>
                        <div className={styles.sectionBlock}>
                            <h2 className={styles.sectionTitle}>Giới thiệu bản thân</h2>
                            <div className={styles.glassCard}>
                                <div className={styles.introText}>
                                    <p>
                                        Tôi là sinh viên định hướng Full-Stack Developer, có kinh nghiệm xây dựng ứng dụng web với Spring Boot và React. Tôi tập trung vào phát triển API, thiết kế backend theo kiến trúc phân lớp, đồng thời có thể triển khai và tích hợp frontend. Tôi cũng đã thực hiện các dự án có dữ liệu lớn thông qua hệ thống crawler tự động và mong muốn được học hỏi, phát triển trong môi trường thực tế.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <aside className={styles.infoSidebar}>
                        <div className={styles.sectionBlock}>
                            <div className={styles.timelineContainer}>
                                <h2 className={styles.sectionTitle}>Thông tin</h2>
                                <div className={styles.timeline}>
                                    {timelineData.map((item, index) => (
                                        <div key={index} className={styles.timelineItem}>
                                            <div className={styles.timelineDot}></div>
                                            <div className={styles.timelineContent}>
                                                <div className={styles.titleRow}>
                                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                                    {item.time && <span className={styles.badge}>{item.time}</span>}
                                                </div>
                                                <div className={styles.itemMeta}>
                                                    <span className={styles.institution}>{item.institution}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                <div className={styles.skillsGrid}>
                    <section className={styles.skillsSection}>
                        <h2 className={styles.sectionTitle}>Công nghệ</h2>
                        <div className={styles.glassCard}>
                            <SkillScroller>
                                <div className={styles.techItem}><img src={htmlImg} alt="HTML" title="HTML5" /></div>
                                <div className={styles.techItem}><img src={cssImg} alt="CSS" title="CSS3" /></div>
                                <div className={styles.techItem}><img src={jsImg} alt="JavaScript" title="JavaScript" /></div>
                                <div className={styles.techItem}><img src={reactImg} alt="React" title="ReactJS" /></div>
                                <div className={styles.techItem}><img src={javaImg} alt="Java" title="Java" /></div>
                                <div className={styles.techItem}><img src={springImg} alt="Spring Boot" title="Spring Boot" /></div>
                                <div className={styles.techItem}><img src={mysqlImg} alt="MySQL" title="MySQL" /></div>
                                <div className={styles.techItem}><img src={mongoDbImg} alt="MongoDB" title="MongoDB" /></div>
                            </SkillScroller>
                        </div>
                    </section>

                    <section className={styles.skillsSection}>
                        <h2 className={styles.sectionTitle}>Công cụ</h2>
                        <div className={styles.glassCard}>
                            <SkillScroller>
                                <div className={styles.techItem}><img src={intellijImg} alt="IntelliJ" title="IntelliJ" /></div>
                                <div className={styles.techItem}><img src={vscodeImg} alt="VSCode" title="VSCode" /></div>
                                <div className={styles.techItem}><img src={dockerImg} alt="Docker" title="Docker" /></div>
                                <div className={styles.techItem}><img src={githubImg} alt="GitHub" title="GitHub" /></div>
                                <div className={styles.techItem}><img src={postmanImg} alt="Postman" title="Postman" /></div>
                                <div className={styles.techItem}><img src={pycharmImg} alt="PyCharm" title="PyCharm" /></div>
                                <div className={styles.techItem}><img src={ngrokImg} alt="Ngrok" title="Ngrok" /></div>
                                <div className={styles.techItem}><img src={figmaImg} alt="Figma" title="Figma" /></div>
                            </SkillScroller>
                        </div>
                    </section>

                    <section className={styles.skillsSection}>
                        <h2 className={styles.sectionTitle}>AI</h2>
                        <div className={styles.glassCard}>
                            <SkillScroller>
                                <div className={styles.techItem}><img src={claudeImg} alt="Claude" title="Claude" /></div>
                                <div className={styles.techItem}><img src={geminiImg} alt="Gemini" title="Gemini" /></div>
                                <div className={styles.techItem}><img src={openaiImg} alt="OpenAI" title="OpenAI" /></div>
                                <div className={styles.techItem}><img src={grokImg} alt="Grok" title="Grok" /></div>
                            </SkillScroller>
                        </div>
                    </section>
                </div>
            </main>

            <div className={styles.backgroundBlur}></div>
        </div>
    );
};

export default Detail;
