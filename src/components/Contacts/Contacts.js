import React from "react";
import styles from "./Contacts.module.css";
import telegram from "./img/telegram.svg";
import instagram from "./img/instagram.svg";
import phone from "./img/phone.svg";
import githubicon from "./img/github.svg";


const Contacts = () => {
    return (
        <div className={styles.wrap}>
        <h1 className={styles.title}>Antonova Anastasia</h1>
            <div className={styles.content}>
                <div className={styles.item}>
                    <img src={telegram} alt="telegram" className={styles.icon} />
                    <a className={styles.links} href='https://t.me/Antonova_1147' target="_blank" rel="noopener noreferrer">Telegram</a>
                </div>
                <div className={styles.item}>
                    <img src={instagram} alt="instagram" className={styles.icon} />
                    <a className={styles.links} href='https://www.instagram.com/antonova__1147' target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className={styles.item}>
                    <img src={githubicon} alt="github" className={styles.icon} />
                    <a className={styles.links} href='https://github.com/AntonovaAL' target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className={styles.item}>
                    <img src={phone} alt="tel" className={styles.icon} />
                    <p>+7(913)424-67-97</p>
                </div>
            </div>
        </div>
    )
};

export default Contacts;