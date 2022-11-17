import React from 'react';
import styles from "./footer.styles.module.scss"
import About from "./about/about";
import Menu from "./menu/menu";
import Contacts from "./contacts/contacts";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <About/>
      <Menu/>
      <Contacts/>
    </footer>
  );
};

export default Footer;
