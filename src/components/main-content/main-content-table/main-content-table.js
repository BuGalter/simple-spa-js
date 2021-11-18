import { Creator } from "../../../utils/creator";

/**
 * main-content-table module.
 * @module simple-spa-js/main-content/main-content-table.
 * @see module: simple-spa-js/dom-element.
 */


 const mainContentTableConteiner = {
  /**
   * Description of the container that will contain table with info.
   * @type {DOM element}
   */
  domElementTag: 'div',
  domElementClasses: ['main-content-table'],
  domElementStyle: {
    'background-color': 'burlywood;',
  }
};

function makeMainContentTable() {
  const mainContentTable = Creator.collectDomElement(mainContentTableConteiner);
  return mainContentTable;
};

export { makeMainContentTable };