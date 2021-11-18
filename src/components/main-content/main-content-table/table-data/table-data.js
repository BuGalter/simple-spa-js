import { Creator } from "../../../../utils/creator";
import { captionTableElement } from "./__caption";

/**
 * table-data module.
 * @module simple-spa-js/main-content/main-content-table/table-data.
 * @see module: simple-spa-js/dom-element.
 */


 const tableDataConteiner = {
  /**
   * Description of the container that will contain table info.
   * @type {DOM element}
   */
  domElementTag: 'table',
  domElementClasses: ['table-data'],
  domElementStyle: {
    'border': '1px solid grey;',
    'border-collapse': 'collapse;',
    'width': '90%;'
  }
};

function makeTableData() {
  const tableData = Creator.collectDomElement(tableDataConteiner);
  const captionTable = Creator.collectDomElement(captionTableElement);
  tableData.append(captionTable);
  return tableData;
};

export { makeTableData };