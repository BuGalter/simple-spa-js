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
    return Creator.element;
  },

  setTagDomElement: () => {
    const tag = Creator.element.tag;
    Creator.domElement = document.createElement(tag);
    return Creator.domElement;
  },

  setClassesDomElement: () => {
    const classes = Creator.element.classes;
    for (let i = 0; i < classes.length; i += 1 ) {
      Creator.domElement.classList.add(classes[i]);
    };
    return Creator.domElement;
  },

  setAttributesDomElement: () => {
    const attributes = Creator.element.attributes;
    for (let prop in attributes) {
      Creator.domElement.setAttribute(prop, attributes[prop]);
    };
    return Creator.domElement;
  },

  setStylesDomElement: () => {
    const style = Creator.element.style;
    if (style !== '') {
      Creator.domElement.setAttribute('style', style);
    };
    return Creator.domElement;
  },

  setTextContentDomElement: () => {
    const text = Creator.element.text;
    Creator.domElement.textContent = text;
    return Creator.domElement;
  },

  createDomElement: (elementDescription) => {
    Creator.initDomElement(elementDescription);
    Creator.setTagDomElement();
    Creator.setClassesDomElement();
    Creator.setAttributesDomElement();
    Creator.setStylesDomElement();
    Creator.setTextContentDomElement();
    return Creator.domElement;
  }
};

export { Creator };