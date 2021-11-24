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