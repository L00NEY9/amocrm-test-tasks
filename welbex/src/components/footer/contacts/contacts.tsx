import React from 'react';
import TelegramIcon from "../../../assets/telegram.svg";
import ViberIcon from "../../../assets/viber.svg";
import WhatsAppIcon from "../../../assets/whatsapp.svg";
import styles from "./contacts.styles.module.scss";

const Contacts: React.FC = () => {
  return (
    <section>
      <span className={"dim heading right"}>
        Контакты
      </span>
      <ul className={"right"}>
        <li className={"wide"}>
          <a href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
        </li>
        <li className={"wide " + styles.chats}>
          <a href={"#"}>
            <img alt={"telegram"} src={TelegramIcon}/>
          </a>
          <a href={"#"}>
            <img alt={"viber"} src={ViberIcon}/>
          </a>
          <a href={"#"}>
            <img alt={"whatsapp"} src={WhatsAppIcon}/>
          </a>
        </li>
        <li>
          <a href={"#"}>Москва, Путевой проезд 3с1, к 902</a>
        </li>
        <li className={styles.rights}>
          ©WELBEX 2022. Все права защищены.
        </li>
        <li className={styles.confidentiality}>
          <a href={"#"}>
            Политика конфиденциальности
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts;
