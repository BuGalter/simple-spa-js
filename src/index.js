import './index.css';
import { appConfig } from './config';
import { makeAppDescription } from './components/app-description/app-description';
import { makeAppHeader } from './components/app-header/app-header';
import { makeMainContent } from './components/main-content/main-content';
import { makeAppFooter } from './components/app-footer/main-content-footer';
import { getApiData } from './utils/get-data-api';
import { insertDataTable } from './utils/insert-data-table';

const body = document.body
const appHeader = makeAppHeader();
body.prepend(appHeader);
const appDescription = makeAppDescription();
const wrapper = document.querySelector('.wrapper-content');
wrapper.append(appDescription);
const mainContent = makeMainContent();
wrapper.append(mainContent);
const footer = makeAppFooter();
wrapper.append(footer);
let table = document.querySelector('.table-data');

document.addEventListener('DOMContentLoaded', () => {
  getApiData(appConfig.url, appConfig.requestParams)
    .then(result => insertDataTable(result, table))
    .then(result => {
        console.log(table);
        console.log(table.rows);
        console.log(table.rows.length);     
        for (let i = 1; i <  table.rows.length; i += 1) {
          console.log(table.rows[i]);
        };
      });
});

setTimeout(() => {
  console.log(table);
  console.log(table.rows);
  console.log(table.rows.length);     
  for (let i = 1; i <  table.rows.length; i += 1) {
    console.log(table.rows[i]);
  };
}, 100);