import './index.css';
import { DomElement } from './utils/dom-element';

const exampleElement = {
  domElementTag: 'h1',
  domElementClasses: [],
  domElementStyle: {},
  domElementAttributes: [],
  domElementText: 'Hello, World!' 
};

const simpleObj = new DomElement(exampleElement);
console.log(simpleObj);
console.log(simpleObj.tag);
