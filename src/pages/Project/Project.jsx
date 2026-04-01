import React, { useState, useEffect, useRef } from 'react';
import styles from './Project.module.css';
import Button from '@/components/Button/Button';

const projects = [
    {
        id: 1,
        name: 'Movie Streaming Website',
        description: 'Website xem phim với hệ thống crawl dữ liệu, tích hợp AI và thanh toán.',
        tags: ['Spring Boot', 'React', 'MySQL', 'Docker', 'Redis', 'MongoDB', 'Python', 'Gemini AI'],
        github: 'https://github.com/HuyCongDev05/cinema',
        demo: null,
        color: '#4CAF50',
    },
    {
        id: 2,
        name: 'Comic reading website',
        description: 'Website đọc truyện với crawler tự động và xử lý dữ liệu lớn.',
        tags: ['Spring Boot', 'MySQL', 'Docker', 'Redis', 'MongoDB', 'Python'],
        github: 'https://github.com/HuyCongDev05/comic',
        demo: null,
        color: '#00BFFF',
    },
    {
        id: 3,
        name: 'Game Store Website',
        description: 'Website bán game với chatbot AI tư vấn và hệ thống mua hàng, đánh giá (thuần vibe coding)',
        tags: ['Laravel', 'Bootstrap', 'MySQL'],
        github: 'https://github.com/HuyCongDev05/PHP-website-programming',
        demo: null,
        color: '#9400D3',
    },
    {
        id: 4,
        name: 'comic book reading app',
        description: 'ứng dụng đọc truyện tranh xài api của bên thứ 3 (Bài tập lớn)',
        tags: ['MySQL', 'Android (XML layouts)'],
        github: 'https://github.com/HuyCongDev05/android-app',
        demo: null,
        color: '#FF6B35',
    },
];

const ProjectCard = ({ project, index }) => {
    return (
        <div 
            className={styles.card}
            style={{ '--card-color': project.color, animationDelay: `${index * 0.1}s` }}
        >
            <div className={styles.cardGlow} />
            <div className={styles.cardHeader}>
                <div className={styles.cardDot} style={{ background: project.color }} />
                <div className={styles.cardDot} style={{ background: project.color, opacity: 0.6 }} />
                <div className={styles.cardDot} style={{ background: project.color, opacity: 0.3 }} />
            </div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.name}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.tagList}>
                    {project.tags.map(tag => (
                        <span key={tag} className={styles.tag} style={{ '--tag-color': project.color }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.cardFooter}>
                <Button
                    onClick={() => window.open(project.github, '_blank')}
                    bgColor="transparent"
                    hoverColor={project.color}
                    textColor="#000"
                    borderRadius="20px"
                    textTransform="none"
                    style={{ border: `1.5px solid ${project.color}`, padding: '0.35rem 1rem', fontSize: '0.8rem', boxShadow: 'none' }}
                >
                    GitHub
                </Button>
                {project.demo && (
                    <Button
                        onClick={() => window.open(project.demo, '_blank')}
                        bgColor={project.color}
                        hoverColor={project.color}
                        textColor="#000"
                        borderRadius="20px"
                        textTransform="none"
                        style={{ padding: '0.35rem 1rem', fontSize: '0.8rem', boxShadow: 'none' }}
                    >
                        Demo
                    </Button>
                )}
            </div>
        </div>
    );
};

export default function Project() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const scrollToTop = (e) => {
        if (e) e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                    <h1 className={styles.pageTitle}>DỰ ÁN</h1>
                </div>
            </header>

            <main className={styles.mainContent}>
                <div className={styles.sectionBlock}>
                    <h2 className={styles.sectionTitle}>Dự án của tôi</h2>
                    <div className={styles.projectGrid}>
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </main>

            <div className={styles.backgroundBlur} />
        </div>
    );
}