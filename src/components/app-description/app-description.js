import { Creator } from "../../utils/creator";
import { shortInfoElement } from "./__short-info";
import { authorElement } from "./__author";
import { clientSideElement } from "./__client-side";

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
  const appDescription = Creator.collectDomElement(appDescriptionConteiner);
  const shortInfo = Creator.collectDomElement(shortInfoElement);
  appDescription.append(shortInfo);
  const author = Creator.collectDomElement(authorElement);
  appDescription.append(author);
  const clientSide = Creator.collectDomElement(clientSideElement);
  appDescription.append(clientSide);
  return appDescription;
};

export { makeAppDescription };