import React from 'react';
import styles from "./app.styles.module.scss"
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={"balls"}>
        <div className={styles.sideGlow}/>
        <div className={styles.topGlow}/>
        <div className={styles.purpleBall}/>
        <div className={styles.largeRedBall}/>
        <div className={styles.smallRedBall}/>
      </div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default App;
