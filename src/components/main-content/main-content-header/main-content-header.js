import { headingElement } from "./__heading";

/**
 * main-content-header module.
 * @module simple-spa-js/main-content/main-content-header.
 * @see module: simple-spa-js/dom-element.
 */


 const mainContentHeaderConteiner = {
  /**
   * Description of the container that will contain information about table.
   * @type {DOM element}
   */
  domElementTag: 'div',
  domElementClasses: ['main-content-header'],
  domElementStyle: {
    'text-align': 'center;',
    'color': 'blue;'
  }
};

function makeMainContentHeader() {
  const mainContentHeader = Creator.collectDomElement(mainContentHeaderConteiner);
  const heading = Creator.collectDomElement(headingElement);
  mainContentHeader.append(heading);
  return mainContentHeader;
};

export { makeMainContentHeader };