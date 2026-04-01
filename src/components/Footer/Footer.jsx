import React, { useState, useCallback } from 'react';
import styles from './Footer.module.css';
import githubImg from '@/assets/imgs/github.png';
import xImg from '@/assets/imgs/x.png';
import tiktokImg from '@/assets/imgs/tiktok.png';
import linkedinImg from '@/assets/imgs/linkedin.png';
import facebookImg from '@/assets/imgs/Facebook.png';
import telegramImg from '@/assets/imgs/telegram.png';

const SOCIALS = [
    { img: githubImg, alt: 'GitHub', href: import.meta.env.VITE_SOCIAL_GITHUB || '#' },
    { img: xImg, alt: 'X (Twitter)', href: import.meta.env.VITE_SOCIAL_X || '#' },
    { img: tiktokImg, alt: 'TikTok', href: import.meta.env.VITE_SOCIAL_TIKTOK || '#' },
    { img: linkedinImg, alt: 'LinkedIn', href: import.meta.env.VITE_SOCIAL_LINKEDIN || '#' },
    { img: facebookImg, alt: 'Facebook', href: import.meta.env.VITE_SOCIAL_TIKTOK || '#' },
    { img: telegramImg, alt: 'Telegram', href: import.meta.env.VITE_SOCIAL_TELEGRAM || '#' },
];

const NAV_LINKS = [
    { label: 'Liên hệ', action: 'animate' },
    { label: 'Hỗ trợ', action: 'animate' },
    { label: 'Dự án', action: 'scrollProject' },
    { label: 'Hợp tác', action: 'animate' },
    { label: 'Chi tiết', action: 'scrollDetail' },
];

export default function Footer({ onScrollToProject, onScrollToDetail }) {
    const [animKey, setAnimKey] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const triggerAnimation = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setAnimKey(k => k + 1);
        setTimeout(() => setIsAnimating(false), SOCIALS.length * 80 + 600);
    }, [isAnimating]);

    const handleNav = (action) => {
        if (action === 'animate') triggerAnimation();
        else if (action === 'scrollProject') onScrollToProject?.();
        else if (action === 'scrollDetail') onScrollToDetail?.();
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <nav className={styles.nav}>
                    {NAV_LINKS.map(link => (
                        <button
                            key={link.label}
                            className={styles.navLink}
                            onClick={() => handleNav(link.action)}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                <div className={styles.socials} key={animKey}>
                    {SOCIALS.map((s, i) => (
                        <a
                            key={s.alt}
                            href={s.href}
                            className={`${styles.socialLink} ${animKey > 0 ? styles.popIn : ''}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={s.alt}
                            style={{ animationDelay: `${i * 0.08}s` }}
                        >
                            <img src={s.img} alt={s.alt} />
                        </a>
                    ))}
                </div>

                <p className={styles.copy}>© Copyright {new Date().getFullYear()} Nguyen Huy Cong</p>
            </div>
        </footer>
    );
}
