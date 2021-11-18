import { Creator } from "../../../../utils/creator";
import { captionTableElement } from "./__caption";
import { tableRowElement } from "./table-row";
import { tableHeadersElement } from "./table-headers";
import { tableHeadersData } from "./table-headers-data";

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
    'width': '90%;',
    'margin-left': 'auto;',
    'margin-right': 'auto;' 
  }
};

function makeTableData() {
  const tableData = Creator.collectDomElement(tableDataConteiner);
  const captionTable = Creator.collectDomElement(captionTableElement);
  const tableRow = Creator.collectDomElement(tableRowElement);
  tableData.append(captionTable);
  tableData.append(tableRow);
  for (let i = 0; i < tableHeadersData.length; i += 1) {
    let tableHeader = Creator.collectDomElement(tableHeadersElement);
    tableHeader.textContent = tableHeadersData[i];
    tableRow.append(tableHeader);
  };
  return tableData;
};

export { makeTableData };