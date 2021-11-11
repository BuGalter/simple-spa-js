import { DomElement } from "../../utils/dom-element";
import { shortInfo } from "./__short-info";

/**
 * app-descpription module.
 * @module simple-spa-js/app-descpription.
 * @see module: simple-spa-js/dom-element.
 */


 const appDescription = {
  /**
   * Description of the container that will contain information about the application.
   * @type {DOM element}
   */
  domElementTag: 'div',
  domElementClasses: ['app-description'],
  domElementStyle: {
    'flex': '1;',
    'justify-content': 'center;',
    'align-content': 'center;',
    'background-color': 'springgreen;'
  },
  domElementAttributes: {
    id: 'test',
  },
  domElementText: 'Hello, world!' 
};

export function makeAppDescription() {
  const domElement = new DomElement(appDescription);
  console.log(domElement.tag);
  console.log(domElement.style);
  const tag = domElement.tag;
  const style = domElement.style;
  const element = document.createElement(tag);
  element.setAttribute('style', style);
  element.className = appDescription.domElementClasses[0];
  element.textContent = appDescription.domElementText;
  console.log(element);
};