function insertDataTable(data, container) {
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
    container.append(tableRowData);
  };
};

export { insertDataTable };