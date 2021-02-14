import React from "react";
import styles from "./Contacts.module.css";
import telegram from "./img/telegram.svg";
import instagram from "./img/instagram.svg";
import phone from "./img/phone.svg";


const Contacts = () => {
    return (
        <div className={styles.wrap}>
        <h1 className={styles.title}>My contacts</h1>
            <div className={styles.content}>
                <div className={styles.item}>
                    <img src={telegram} alt="telegram" className={styles.icon} />
                    <a className={styles.links} href='https://t.me/Antonova_1147'>Telegram</a>
                </div>
                <div className={styles.item}>
                    <img src={instagram} alt="instagram" className={styles.icon} />
                    <a className={styles.links} href='https://www.instagram.com/antonova__1147'>Instagram</a>
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