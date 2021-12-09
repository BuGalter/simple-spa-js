import { Creator } from "../../utils/creator";
import { makeMainContentHeader } from "./main-content-header/main-content-header";
import { makeMainContentForm } from "./main-content-form/main-content-form";
import { makeMainContentTable } from "./main-content-table/main-content-table";

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
  const sortForm = makeMainContentForm();
  const mainTable = makeMainContentTable();
  mainContent.append(mainContentHeader);
  mainContent.append(mainTable);
  mainContent.append(sortForm);
  return mainContent;
};

export { makeMainContent };