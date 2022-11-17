import React, {useMemo} from 'react';
import styles from "./menu.styles.module.scss"

const Menu: React.FC = () => {
  const routes = useMemo<string[]>(() => [
    "Расчёт стоимости",
    "Услуги",
    "Виджеты",
    "Интеграции",
    "Наши клиенты",
    "Кейсы",
    "Благодарственные письма",
    "Сертификаты",
    "Блог на Youtube",
    "Вопрос / Ответ"
  ], [])

  return (
    <section>
      <span className={"dim heading"}>Меню</span>
      <div className={styles.navigates}>
        <ul>
          {
            routes.slice(0, 5).map(route => (
              <li key={route}>
                <a href={"#"}>
                  {
                    route
                  }
                </a>
              </li>
            ))
          }
        </ul>
        <ul>
          {
            routes.slice(5).map(route => (
              <li key={route}>
                <a href={"#"}>
                  {
                    route
                  }
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default Menu;
