import { Creator } from "../../../utils/creator";
import { makeTablePaginator } from "./table-paginator/table-paginator";
import { makeTableData } from "./table-data/table-data";

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
  const tableData = makeTableData();
  //const tablePaginator = makeTablePaginator();
  mainContentTable.append(tableData);
  //mainContentTable.append(tablePaginator);
  return mainContentTable;
};

export { makeMainContentTable };