import React from 'react';
import News from './News';
import Add from './Add';

const myNews = [
  {
    id: 1,
    author: 'Максим Гатилин',
    title: 'Синхронизация Redux с параметрами URL',
    text:
      'Максим Гатилин демонстрирует решение, которое позволяет сохранять параметры фильтров при перезагрузке или делиться ссылкой на состояние страницы',
  },
  {
    id: 2,
    author: 'Факундо Коррадини',
    title: 'Смена цвета текста на контрастный в зависимости от фона',
    text:
      'Факундо Коррадини придумал удивительный трюк на кастомных CSS-свойствах, который манипулирует значениями в HSL и реализует логику переключения прямо в рантайме',
  },
  {
    id: 3,
    author: 'Кейси Баскес',
    title: 'Отладка доступности интерфейсов в Chrome',
    text:
      'Обзор возможностей по отладке доступности интерфейсов в Chrome DevTools: аудит в Lighthouse, панель Accessibility в инспекторе DOM, информация о контрастности цветов',
  },
  {
    id: 4,
    author: 'Эдди Османи, Джереми Вагнер',
    title: 'Как уменьшить JS-нагрузку с помощью код-сплитинга',
    text:
      'Как уменьшить JS-нагрузку с помощью код-сплитинга. Подробное руководство Джереми Вагнера и Эдди Османи на Web Fundamentals',
  },
];

export default () => (
  <React.Fragment>
    <h1>Новости</h1>
    <Add />
    <News data={myNews} />
  </React.Fragment>
);
