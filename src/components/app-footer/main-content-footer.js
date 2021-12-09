import { Creator } from "../../utils/creator";
import { copyrightElement } from "./__copyright";
import { nickElement } from "./__nick";
import { mailElement } from "./__mail";

/**
 * main-content-footer module.
 * @module simple-spa-js/main-content/main-content-footer.
 * @see module: simple-spa-js/dom-element.
 */

const appFooterConteiner = {
  /**
   * Description of the container that will contain footer app.
   * @type {DOM element}
   */
  domElementTag: 'div',
  domElementClasses: ['app-footer', 'flex-block'],
  domElementStyle: {
    'width': '100%;',
    'background-color': 'black;',
    'justify-content': 'space-around;',
  }
};

function makeAppFooter() {
  const footerElements = [copyrightElement, nickElement, mailElement];
  const appFooter = Creator.collectElementsToContainer(appFooterConteiner, footerElements);
  return appFooter;
};

export { makeAppFooter };