/**
 * __option-price module.
 * @module simple-spa-js/main-content/main-content-form/form-select-column/__option-price.
 * @see module: simple-spa-js/dom-element.
 */

 export const optionPriceElement = {
  /**
   * Item description option price in select column.
   * @type {DOM element}
   */
  domElementTag: 'option',
  domElementClasses: ['select-column__option-price'],
  domElementAttributes: {
    value: 'price',
  },
  domElementText: 'Цена закупа'
};
