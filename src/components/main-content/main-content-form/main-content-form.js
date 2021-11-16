import { Creator } from "../../../utils/creator";

/**
 * main-content-form module.
 * @module simple-spa-js/main-content/main-content-form.
 * @see module: simple-spa-js/dom-element.
 */


 const mainContentFormConteiner = {
  /**
   * Description of the container that will contain sort form.
   * @type {DOM element}
   */
  domElementTag: 'form',
  domElementClasses: ['main-content-sort-form', 'flex-block'],
  domElementStyle: {
    'justify-content': 'space-around;'
  }
};

function makeMainContentForm() {
  const sortForm = Creator.collectDomElement(mainContentFormConteiner);
  return sortForm;
};

export { makeMainContentForm };