import React from 'react';

const About: React.FC = () => {
  return (
    <section>
      <span className={"dim heading"}>О Компании</span>
      <ul>
        <li>
          <a href={"#"}>
            Партнёрская программа
          </a>
        </li>
        <li>
          <a href={"#"}>
            Вакансии
          </a>
        </li>
      </ul>
    </section>
  );
};

export default About;
