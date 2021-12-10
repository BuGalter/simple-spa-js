import './index.css';
import { makeAppDescription } from './components/app-description/app-description';
import { makeAppHeader } from './components/app-header/app-header';
import { makeMainContent } from './components/main-content/main-content';
import { makeAppFooter } from './components/app-footer/main-content-footer';

const body = document.body
const appHeader = makeAppHeader();
body.prepend(appHeader);
const appDescription = makeAppDescription();
const wrapper = document.querySelector('.wrapper-content')
wrapper.append(appDescription);
const mainContent = makeMainContent();
wrapper.append(mainContent);
const footer = makeAppFooter();
wrapper.append(footer);

let url = 'http://127.0.0.1:7000/api';
let requestParams = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'API-Key': 'secret'
    }
  };
