/**
 * __input-sort-parameter module.
 * @module simple-spa-js/main-content/main-content-form/__input-sort-parameter.
 * @see module: simple-spa-js/dom-element.
 */

 export const inputElement = {
  /**
   * Item description input for sort parameter .
   * @type {DOM element}
   */
  domElementTag: 'input',
  domElementClasses: ['sort-form__input-sort-parameter'],
  domElementAttributes: {
    type: 'text',
    placeholder: 'Введите параметр сортировки'
  },
  domElementStyle: {
    'border-radius': '10px;',
  }
};
