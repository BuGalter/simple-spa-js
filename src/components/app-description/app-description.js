import { DomElement } from "../../utils/dom-element";
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
  },
  /* domElementAttributes: {
    id: 'test',
  }, */
  domElementText: 'Hello, world!' 
};

export function makeAppDescription() {
  const domElement = new DomElement(appDescription);
  const tag = domElement.tag;
  console.log(tag);
  const style = domElement.style;
  //const style = undefined;
  console.log(style);
  const text = domElement.text;
  console.log(text);
  const attributes = domElement.attributes;
  console.log(attributes);
  const classes = domElement.classes;
  //const classes = undefined;
  console.log(classes);
  const element = document.createElement(tag);
  if (classes !== undefined) {
    for (let i = 0; i < classes.length; i += 1 ) {
      element.classList.add(classes[i]);
    };
  };
  if (style !== undefined) {
    element.setAttribute('style', style);
  };
  for (let prop in attributes) {
    element.setAttribute(prop, attributes[prop]);
  };
  element.textContent = text;
  let wrapper = document.querySelector('.wrapper-content');
  wrapper.append(element);
};