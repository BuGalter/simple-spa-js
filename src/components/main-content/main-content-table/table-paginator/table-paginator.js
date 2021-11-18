import { Creator } from "../../../utils/creator";

/**
 * table-paginator module.
 * @module simple-spa-js/main-content/main-content-table/table-paginator.
 * @see module: simple-spa-js/dom-element.
 */


 const tablePaginatorConteiner = {
  /**
   * Description of the container that will contain table with info.
   * @type {DOM element}
   */
  domElementTag: 'div',
  domElementClasses: ['table-paginator', 'flex-block'],
  domElementAttributes: {
    numberOfRecords: '0'
  }
};

function makeTablePaginator() {
  const tablePaginator = Creator.collectDomElement(tablePaginatorConteiner);
  return tablePaginator;
};

export { makeTablePaginator };