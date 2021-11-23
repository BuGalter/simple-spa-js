import { Creator } from "../../../utils/creator";
import { copyrightElement } from "./__copyright";
import { nickElement } from "./__nick";
import { mailElement } from "./__mail";

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
    'justify-content': 'space-around;',
  }
};

function makeMainContentFooter() {
  const footerElements = [copyrightElement, nickElement, mailElement];
  const mainContentFooter = Creator.collectElementsToContainer(mainContentFooterConteiner, footerElements);
  return mainContentFooter;
};

export { makeMainContentFooter };