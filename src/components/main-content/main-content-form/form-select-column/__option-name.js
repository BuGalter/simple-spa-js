/**
 * __option-name module.
 * @module simple-spa-js/main-content/main-content-form/form-select-column/__option-name.
 * @see module: simple-spa-js/dom-element.
 */

 export const optionNameElement = {
  /**
   * Item description option name in select column.
   * @type {DOM element}
   */
  domElementTag: 'option',
  domElementClasses: ['select-column__option-name'],
  domElementAttributes: {
    value: 'name',
    selected: true
  },
  domElementText: 'Наименование'
};
