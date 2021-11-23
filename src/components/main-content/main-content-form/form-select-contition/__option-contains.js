/**
 * __option-contains module.
 * @module simple-spa-js/main-content/main-content-form/form-select-column/__option-contains.
 * @see module: simple-spa-js/dom-element.
 */

 export const optionContainsElement = {
  /**
   * Item description option contains in select condition.
   * @type {DOM element}
   */
  domElementTag: 'option',
  domElementClasses: ['select-contition__option-contains'],
  domElementAttributes: {
    value: 'contains',
    selected: true
  },
  domElementText: 'Содержит'
};
