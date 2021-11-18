import { Creator } from "../../../../utils/creator";
import { pageNumberBtnElement } from "./__page-number-btn";

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
    numberofrecords: '50'
  },
  domElementStyle: {
    'justify-content': 'center;'
  }
};

function makeTablePaginator() {
  const tablePaginator = Creator.collectDomElement(tablePaginatorConteiner);
  const numPages = tablePaginator.getAttribute('numberofrecords');
  const numberOfPages = (+numPages) / 10;
  for (let i = 0; i < numberOfPages; i += 1) {
    const paginatorBtn = Creator.collectDomElement(pageNumberBtnElement);
    paginatorBtn.textContent = (i + 1);
    tablePaginator.append(paginatorBtn);
  };
  return tablePaginator;
};

export { makeTablePaginator };