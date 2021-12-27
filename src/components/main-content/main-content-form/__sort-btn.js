/**
 * __sort-btn module.
 * @module simple-spa-js/main-content/main-content-form/__sort-btn.
 * @see module: simple-spa-js/dom-element.
 */

 export const sortBtnElement = {
  /**
   * Item description sort button.
   * @type {DOM element}
   */
  domElementTag: 'button',
  domElementClasses: ['sort-form__sort-btn'],
  domElementAttributes: {
    name: 'sort-btn',
  },
  domElementStyle: {
    'border-radius': '5px;',
    'background': 'green;',
    'color': 'gold;'
  },
  domElementText: 'Сортировать'
};
