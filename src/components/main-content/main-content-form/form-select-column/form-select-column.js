import { Creator } from "../../../../utils/creator";
import { optionNameElement } from "./__option-name";
import { optionNumberElement } from "./__option-number";
import { optionPriceElement } from "./__option-price";

/**
 * form-select-column module.
 * @module simple-spa-js/main-content/main-content-form/form-select-column.
 * @see module: simple-spa-js/dom-element.
 */


 const formSelectColumnConteiner = {
  /**
   * Description of the container that will contain select for column.
   * @type {DOM element}
   */
  domElementTag: 'select',
  domElementClasses: ['form-select-column'],
  domElementAttributes: {
    id: 'select-columns'
  }
};

function collectConteinerElements(container, arrayElements) {
  const len = arrayElements.length;
  const domConteiner = Creator.collectDomElement(container); 
  for (let i = 0; i < len; i +=1) {
    let domElement = Creator.collectDomElement(arrayElements[i]);
    domConteiner.append(domElement);
  };
  return domConteiner;
};

function makeFormSelectColumn() {
  const selectFormElements = [optionNameElement, optionNumberElement, optionPriceElement];
  const formSelectColumn = collectConteinerElements(formSelectColumnConteiner, selectFormElements);
  return formSelectColumn;
};

export { makeFormSelectColumn };