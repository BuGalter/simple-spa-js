import { Creator } from "../../../utils/creator";
import { copyrightElement } from "./__copyright";
import { nickElement } from "./__nick";

/**
 * main-content-footer module.
 * @module simple-spa-js/main-content/main-content-footer.
 * @see module: simple-spa-js/dom-element.
 */


 const mainContentFooterConteiner = {
  /**
   * Description of the container that will contain footer app.
   * @type {DOM element}
   */
  domElementTag: 'div',
  domElementClasses: ['main-content-footer', 'flex-block'],
  domElementStyle: {
    'background-color': 'black;',
  }
};

function makeMainContentFooter() {
  const mainContentFooter = Creator.collectDomElement(mainContentFooterConteiner);
  const copyright = Creator.collectDomElement(copyrightElement);
  const nick = Creator.collectDomElement(nickElement);
  mainContentFooter.append(copyright);
  mainContentFooter.append(nick);
  return mainContentFooter;
};

export { makeMainContentFooter };