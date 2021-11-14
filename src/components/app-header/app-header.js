import { Creator } from "../../utils/creator";
import { headingElement } from "./__heading";

/**
 * app-header module.
 * @module simple-spa-js/app-header.
 * @see module: simple-spa-js/dom-element.
 */


 const appHeaderConteiner = {
  /**
   * Description of the container that will contain main header for app.
   * @type {DOM element}
   */
  domElementTag: 'div',
  domElementClasses: ['app-header'],
  domElementStyle: {
    'text-align': 'center;',
    'color': 'blue;'
  }
};

function makeAppHeader() {
  const appHeader = Creator.collectDomElement(appHeaderConteiner);
  const heading = Creator.collectDomElement(headingElement);
  appHeader.append(heading);
  return appHeader;
};

export { makeAppHeader };