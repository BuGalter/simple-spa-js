import { Creator } from "../../../../utils/creator";
import { captionTableElement } from "./__caption";
import { tableRowElement } from "./table-row";
import { tableHeadersElement } from "./table-headers";
import { tableHeadersData } from "./table-headers-data";
import { tableCellElement } from "./table-cell";

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

async function getApiData(url, requestParams = {}) {
  let response = await fetch(url, requestParams);
  let data = await response.json();
  return data;
};

function insertDataTable(data, conteiner) {
  let len = data.length;
  for (let i = 0; i < len; i += 1) {
    let tableRowData = Creator.collectDomElement(tableRowElement);
    for (let key in data[i]) { 
      if (key !== 'id') {
        let tableCell = Creator.collectDomElement(tableCellElement);
        tableCell.textContent = data[i][key];
        tableRowData.append(tableCell);
      };
    };
    conteiner.append(tableRowData);
  };
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

  getApiData(url, requestParams).then(result => insertDataTable(result, tableData));

  return tableData;
};

export { makeTableData };