import React, {useMemo} from 'react';
import styles from "./main.styles.module.scss"
import {useWindowSize} from "../../hooks/windowSize.hook";
import {collapseWidth} from "../../constants/ui";

interface GiftInterface {
  title: string;
  description: string;
}

const Main: React.FC = () => {
  const {width} = useWindowSize()

  const gifts = useMemo<GiftInterface[][]>(() => [
    [
      {
        title: "Виджеты",
        description: "30 готовых<br>решений"
      },
      {
        title: "Skype Аудит",
        description: "отдела продажи<br/>CRM системы"
      }
    ],
    [
      {
        title: "Dashboard",
        description: "с показателями <br/>вашего бизнеса"
      },
      {
        title: "35 Дней",
        description: "использования<br/>CRM"
      }
    ]
  ], [])

  const collapsedGifts = useMemo<GiftInterface[][]>(() => [
    [
      {
        title: "Skype Аудит",
        description: "отдела продажи<br/>CRM системы"
      },
      {
        title: "Dashboard",
        description: "с показателями <br/>вашего бизнеса"
      },
    ],
    [
      {
        title: "30 Виджетов",
        description: "30 готовых<br>решений"
      },
      {
        title: "Месяц аmoCRM",
        description: "использования<br/>CRM"
      }
    ]
  ], [])

  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.heading}>Зарабатывайте больше</h1>
        <h2 className={styles.companyTitle}>с WELBEX</h2>
        <p className={styles.description}>
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div className={styles.rightSide}>
        <h2>
          Вместе с <span>бесплатной</span> <span>консультацией</span> мы дарим:
        </h2>
        <div className={styles.giftsWrapper}>
          {
            (width <= collapseWidth ? collapsedGifts : gifts).map((giftRow, index) => (
              <div className={styles.gifts} key={index}>
                {
                  giftRow.map(gift => (
                    <div key={gift.title}>
                      <h1 className={styles.giftHeading}>{ gift.title }</h1>
                      <p className={styles.giftDescription} dangerouslySetInnerHTML={{ __html: gift.description }}/>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
        <button className={styles.consultationButton}>
          Получить консультацию
        </button>
      </div>
      <div className={styles.glass}/>
    </main>
  );
};

export default Main;
