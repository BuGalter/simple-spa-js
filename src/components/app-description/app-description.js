import { Creator } from "../../utils/creator";
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
    'background-color': 'springgreen;'
  },
  domElementAttributes: {
    id: 'test',
  },
  domElementText: 'Hello, world!' 
};

function makeAppDescription() {
  const appDescribe = Creator.createDomElement(appDescription);
  return appDescribe;
};

export { makeAppDescription };