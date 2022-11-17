import React from 'react';
import styles from "./header.styles.module.scss"
import Menu from "./menu/menu";
import Logotype from "./logotype/logotype";
import Contacts from "./contacts/contacts";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.leftSide}>
        <Logotype/>
        <Menu/>
      </div>
      <div className={styles.rightSide}>
        <Contacts/>
      </div>
    </header>
  );
};

export default Header;
