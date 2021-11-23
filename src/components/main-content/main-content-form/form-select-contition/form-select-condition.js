import { Creator } from "../../../../utils/creator";
import { optionEqualElement } from "./__option-equal";
import { optionContainsElement } from "./__option-contains";
import { optionMoreElement } from "./__option-more";
import { optionSmallerElement } from "./__option-smaller";

/**
 * form-select-condition module.
 * @module simple-spa-js/main-content/main-content-form/form-select-condition.
 * @see module: simple-spa-js/dom-element.
 */


 const formSelectConditionConteiner = {
  /**
   * Description of the container that will contain select for condition.
   * @type {DOM element}
   */
  domElementTag: 'select',
  domElementClasses: ['form-select-condition'],
  domElementAttributes: {
    id: 'select-condition'
  }
};


function makeFormSelectCondition() {
  const selectFormElements = [optionEqualElement, optionContainsElement, optionMoreElement, optionSmallerElement];
  const formSelectCondition = Creator.collectElementsToContainer(formSelectConditionConteiner, selectFormElements);
  return formSelectCondition;
};

export { makeFormSelectCondition };