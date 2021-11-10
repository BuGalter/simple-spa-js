import { shortInfo } from "./__short-info";

/**
 * app-descpription module.
 * @module simple-spa-js/app-descpription.
 */


/**
 * @typedef {Object} DOM element.
 * @property {string} domElementTag - tag name DOM node.
 * @property {array} domElementClasses - array of element class name.
 * @property {object} domElementStyle - the object that contains the styles of the element.
 * @property {object} domElementAttributes - the object that contains the attributes of the element.
 * @property {string} domElementText - element text content.
 */

 const appDescription = {
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
  console.log(appDescription);
  console.log(shortInfo);
};