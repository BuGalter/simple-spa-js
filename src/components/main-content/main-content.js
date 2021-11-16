import { Creator } from "../../utils/creator";
import { makeMainContentHeader } from "./main-content-header/main-content-header";

/**
 * main-content module.
 * @module simple-spa-js/main-content/main-content.
 * @see module: simple-spa-js/dom-element.
 */


 const mainContentConteiner = {
  /**
   * Description of the container that will contain main app info.
   * @type {DOM element}
   */
  domElementTag: 'div',
  domElementClasses: ['main-content'],
  domElementStyle: {
    'flex': '2;',
    'background-color': 'slateblue;'
  }
};

function makeMainContent() {
  const mainContent = Creator.collectDomElement(mainContentConteiner);
  const mainContentHeader = makeMainContentHeader();
  mainContent.append(mainContentHeader);
  return mainContent;
};

export { makeMainContent };