import { DomElement } from "./dom-element";

/**
 * Creator module.
 * @module utils/creator
 * @see module: simple-spa-js/dom-element.
 */

const Creator = {
  initDomElement: (elementDescription) => {
    Creator.element = new DomElement(elementDescription);
  },

  createDomElement: () => {
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

  collectDomElement: (elementDescription) => {
    Creator.initDomElement(elementDescription);
    Creator.createDomElement();
    Creator.setClassesDomElement();
    Creator.setAttributesDomElement();
    Creator.setStylesDomElement();
    Creator.setTextContentDomElement();
    return Creator.domElement;
  },

  collectElementsToContainer: (container, arrayElements) => {
    const len = arrayElements.length;
    const domConteiner = Creator.collectDomElement(container); 
    for (let i = 0; i < len; i +=1) {
      let domElement = Creator.collectDomElement(arrayElements[i]);
      domConteiner.append(domElement);
    };
    return domConteiner;
  }
};

export { Creator };