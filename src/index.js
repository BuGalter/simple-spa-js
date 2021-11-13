import './index.css';
import { makeAppDescription } from './components/app-description/app-description';

const appDescription = makeAppDescription();
let wrapper = document.querySelector('.wrapper-content');
wrapper.prepend(appDescription);