import { Creator } from "../../../utils/creator";

/**
 * form-select-column module.
 * @module simple-spa-js/main-content/main-content-form/form-select-column.
 * @see module: simple-spa-js/dom-element.
 */


 const formSelectColumnConteiner = {
  /**
   * Description of the container that will contain select for column.
   * @type {DOM element}
   */
  domElementTag: 'select',
  domElementClasses: ['form-select-column'],
  domElementAttributes: {
    id: 'select-columns'
  }
};

function makeFormSelectColumn() {
  return formSelectColumn;
};

export { makeFormSelectColumn };