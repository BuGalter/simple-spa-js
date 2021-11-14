/**
 * __work-principles module.
 * @module simple-spa-js/app-descpription/__work-principles
 * @see module: simple-spa-js/dom-element.
 */

 export const serverSideElement = {
  /**
   * Item description short information about the work-principles of application.
   * @type {DOM element}
   */
  domElementTag: 'p',
  domElementClasses: ['app-description__work-principles'],
  domElementStyle: {
    'color': 'crimson;',
    'text-align': 'center;',
  },
  domElementText: 'Приложение, получает данные из базы данных без перезагрузки страницы.\
  Обновляется только информация в таблицер. Данные можно сортировать, так же был\
  реализован пагинатор, который обновляется вместе с таблицей.' 
};
