import React from 'react';
import styles from './contacts.styles.module.scss';
import TelegramIcon from "../../../assets/telegram.svg";
import ViberIcon from "../../../assets/viber.svg";
import WhatsAppIcon from "../../../assets/whatsapp.svg";

const Contacts = () => {

  return (
    <div className={styles.container}>
      <a className={styles.telephone} href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
      <ul className={styles.chats}>
        <a href={"#"}>
          <img alt={"telegram"} src={TelegramIcon}/>
        </a>
        <a href={"#"}>
          <img alt={"viber"} src={ViberIcon}/>
        </a>
        <a href={"#"}>
          <img alt={"whatsapp"} src={WhatsAppIcon}/>
        </a>
      </ul>
    </div>
  );
};

export default Contacts;
