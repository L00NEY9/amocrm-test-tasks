import React from 'react';
import styles from "./logotype.styles.module.scss";
import LogoImage from "../../../assets/logo.svg";

const Logotype: React.FC = () => {
  return (
    <div className={styles.container}>
      <img alt={"logo"} src={LogoImage}/>
      <p>
        крупный интегратор CRM
        <br/>
        в Росcии и ещё 8 странах
      </p>
    </div>
  );
};

export default Logotype;
