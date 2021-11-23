import { Creator } from "../../../utils/creator";
import { sortBtnElement } from "./__sort-btn";
import { inputElement } from "./__input";
import { makeFormSelectColumn } from "./form-select-column/form-select-column";

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
  domElementAttributes: {
    name: 'sortForm'
  },
  domElementStyle: {
    'justify-content': 'space-around;'
  }
};

function makeMainContentForm() {
  const formElements = [inputElement, sortBtnElement];
  const sortForm = Creator.collectElementsToContainer(mainContentFormConteiner, formElements);
  const selectColumn = makeFormSelectColumn();
  sortForm.prepend(selectColumn)
  return sortForm;
};

export { makeMainContentForm };