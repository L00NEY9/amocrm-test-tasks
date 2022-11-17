import React, {useMemo} from 'react';
import styles from "./menu.styles.module.scss";

const Menu = () => {
  const routes = useMemo<string[]>(() => [
    "Услуги",
    "Виджеты",
    "Интеграции",
    "Кейсы",
    "Сертификаты"
  ], [])

  return (
    <ul className={styles.container}>
      {
        routes.map((route) => (
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
  );
};

export default Menu;
