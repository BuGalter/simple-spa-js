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
  }
};

function makeAppDescription() {
  const appDescript = Creator.collectDomElement(appDescription);
  const infoShort = Creator.collectDomElement(shortInfo);
  appDescript.append(infoShort);

  /* Creator.initDomElement(appDescription);
  console.log(Creator.element);
  Creator.createDomElement();
  console.log(Creator.domElement);
  Creator.setClassesDomElement();
  Creator.setStylesDomElement();
  Creator.setTextContentDomElement(); */
  return appDescript;
};

export { makeAppDescription };