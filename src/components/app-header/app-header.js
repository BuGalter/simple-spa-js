import { Creator } from "../../utils/creator";

/**
 * app-header module.
 * @module simple-spa-js/app-header.
 * @see module: simple-spa-js/dom-element.
 */


 const appHeader = {
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
  const appHeading = Creator.collectDomElement(appHeader);
  const heading = Creator.collectDomElement();
  appHeading.append();
  return appHeading;
};

export { makeAppHeader };