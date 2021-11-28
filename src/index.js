import './index.css';
import { Creator } from './utils/creator';
import { makeAppDescription } from './components/app-description/app-description';
import { makeAppHeader } from './components/app-header/app-header';
import { makeMainContent } from './components/main-content/main-content';

const body = document.body
const appHeader = makeAppHeader();
body.prepend(appHeader);
const appDescription = makeAppDescription();
const wrapper = document.querySelector('.wrapper-content')
wrapper.append(appDescription);
const mainContent = makeMainContent();
wrapper.append(mainContent);

let url = 'http://127.0.0.1:7000/api';
let response = await fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'API-Key': 'secret'
  }
});
let data = await response.json();
console.log(data);