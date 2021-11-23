import { Creator } from "../../utils/creator";
import { shortInfoElement } from "./__short-info";
import { authorElement } from "./__author";
import { clientSideElement } from "./__client-side";
import { serverSideElement } from "./__server-side";
import { workPrinciplesElement } from "./__work-principles";

/**
 * app-descpription module.
 * @module simple-spa-js/app-descpription.
 * @see module: simple-spa-js/dom-element.
 */


 const appDescriptionConteiner = {
  /**
   * Description of the container that will contain information about the application.
   * @type {DOM element}
   */
  domElementTag: 'div',
  domElementClasses: ['app-description'],
  domElementStyle: {
    'flex': '1;',
    'background-color': 'springgreen;'
  }
};

function makeAppDescription() {
  const appDescriptionElements = [shortInfoElement, authorElement, clientSideElement,
  serverSideElement, workPrinciplesElement];
  const appDescription = Creator.collectElementsToContainer(appDescriptionConteiner, appDescriptionElements);
  return appDescription;
};

export { makeAppDescription };