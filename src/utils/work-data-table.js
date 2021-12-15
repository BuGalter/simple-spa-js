import { Creator } from "./creator";
import { tableTbodyElement } from "../components/main-content/main-content-table/table-data/table-tbody";
import { tableRowElement } from "../components/main-content/main-content-table/table-data/table-row";
import { tableCellElement } from "../components/main-content/main-content-table/table-data/table-cell";

function insertDataTable(data) {
  let len = data.length;
  let tbody = Creator.collectDomElement(tableTbodyElement);
  for (let i = 0; i < len; i += 1) {
    let tableRowData = Creator.collectDomElement(tableRowElement);
    for (let key in data[i]) { 
      if (key !== 'id') {
        let tableCell = Creator.collectDomElement(tableCellElement);
        tableCell.textContent = data[i][key];
        tableRowData.append(tableCell);
      };
    };
    tbody.append(tableRowData);
  };
  return tbody;
};

function deleteBodyTable(data, table) {
  let tbody = table.tBodies;
      if (tbody.length === 0) {
        return data;
      };
      tbody.remove();
      return data;
};

export { insertDataTable, deleteBodyTable };