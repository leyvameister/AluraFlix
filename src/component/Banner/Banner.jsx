import React from 'react';
import styles from './Banner.module.css';

const Banner = ({ title, subtitle, text, backgroundImage, cardImage }) => {
    return (
        <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
                <div className={styles.text}>{text}</div>
            </div>
            <img className={styles.cardImage} src={cardImage} alt="cardImage" />
        </div>
    );
};

export default Banner;
