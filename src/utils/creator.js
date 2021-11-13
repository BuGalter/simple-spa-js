import { DomElement } from "./dom-element";

/**
 * Creator module.
 * @module utils/creator
 * @see module: simple-spa-js/dom-element.
 */

const Creator = {
  element: '',
  domElement: '',
  initDomElement: (elementDescription) => {
    Creator.element = new DomElement(elementDescription);
  },

  setTagDomElement: () => {
    const tag = Creator.element.tag;
    Creator.domElement = document.createElement(tag);
  },

  setClassesDomElement: () => {
    const classes = Creator.element.classes;
    for (let i = 0; i < classes.length; i += 1 ) {
      Creator.domElement.classList.add(classes[i]);
    };
  },

  setAttributesDomElement: () => {
    const attributes = Creator.element.attributes;
    for (let prop in attributes) {
      Creator.domElement.setAttribute(prop, attributes[prop]);
    };
  },

  setStylesDomElement: () => {
    const style = Creator.element.style;
    if (style !== '') {
      Creator.domElement.setAttribute('style', style);
    };
  },

  setTextContentDomElement: () => {
    const text = Creator.element.text;
    Creator.domElement.textContent = text;
  },

  createDomElement: (elementDescription) => {
    Creator.initDomElement(elementDescription);
    console.log(Creator.element);
    Creator.setTagDomElement();
    console.log(Creator.domElement);
    Creator.setClassesDomElement();
    Creator.setAttributesDomElement();
    Creator.setStylesDomElement();
    Creator.setTextContentDomElement();
    return Creator.domElement;
  }
};

export { Creator };