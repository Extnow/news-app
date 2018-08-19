import React from 'react';
import News from './News';

const myNews = [
  {
    id: 1,
    author: 'Максим Гатилин',
    title: 'Синхронизация Redux с параметрами URL',
  },
  {
    id: 2,
    author: 'Факундо Коррадини',
    title: 'Смена цвета текста на контрастный в зависимости от фона',
  },
  {
    id: 3,
    author: 'Кейси Баскес',
    title:
      'Обзор возможностей по отладке доступности интерфейсов в Chrome DevTools: аудит в Lighthouse, панель Accessibility в инспекторе DOM, информация о контрастности цветов',
  },
  {
    id: 4,
    author: 'Эдди Османи, Джереми Вагнер',
    title: 'Как уменьшить JS-нагрузку с помощью код-сплитинга',
  },
];

export default () => (
  <React.Fragment>
    <h1>Новости</h1>
    <News data={myNews} />
  </React.Fragment>
);
