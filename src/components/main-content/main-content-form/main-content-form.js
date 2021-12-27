import { Creator } from "../../../utils/creator";
import { sortBtnElement } from "./__sort-btn";
import { inputElement } from "./__input-sort-parameter";
import { makeFormSelectColumn } from "./form-select-column/form-select-column";
import { makeFormSelectCondition } from "./form-select-contition/form-select-condition";

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
    name: 'sort-form'
  },
  domElementStyle: {
    'justify-content': 'space-around;'
  }
};

function makeMainContentForm() {
  const formElements = [inputElement, sortBtnElement];
  const sortForm = Creator.collectElementsToContainer(mainContentFormConteiner, formElements);
  const selectCondition = makeFormSelectCondition();
  sortForm.prepend(selectCondition);
  const selectColumn = makeFormSelectColumn();
  sortForm.prepend(selectColumn)
  return sortForm;
};

export { makeMainContentForm };