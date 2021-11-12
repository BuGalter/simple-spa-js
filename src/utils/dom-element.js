/**
 * dom-element module.
 * @module simple-spa-js/dom-element
 */

/**
 * @typedef {Object} DOM element.
 * @property {string} domElementTag - tag name DOM node.
 * @property {array} domElementClasses - array of element class name.
 * @property {object} domElementStyle - the object that contains the styles of the element.
 * @property {object} domElementAttributes - the object that contains the attributes of the element.
 * @property {string} domElementText - element text content.
 */

/** Class representing DOM node.*/
class DomElement {
  /**
   * Create a DOM node.
   * @param {DomElement} elementDescription - Description of the DOM node being created. 
   */
  constructor(elementDescription = {}) {
    this.domElementTag = elementDescription.domElementTag;
    this.domElementClasses = elementDescription.domElementClasses;
    this.domElementStyle = elementDescription.domElementStyle;
    this.domElementAttributes = elementDescription.domElementAttributes;
    this.domElementText = elementDescription.domElementText;
  };
  /**
   * Checks that the tag name is correct.
   * If the tag name are not passed or are not correct, returns string 'div'.
   * @returns {string} The tag name.
   */
  get tag() {
    if (this.domElementTag === undefined ||
        this.domElementTag === '' ||
        typeof this.domElementTag !== 'string') {
          return 'div';
    };
    return this.domElementTag;
  };
  /**
   * Checks that style element is correct and turns the object into a string,
   * If the styles are not passed or are not correct, returns an empty string.
   * @returns {string} The styles for DOM element.
   */
  get style() {
    let stringStyle = '';
    if (this.domElementStyle === undefined || 
        typeof this.domElementStyle !== 'object') {
          return stringStyle;
    };
    for (let prop in this.domElementStyle) {
      stringStyle += prop + ':' + this.domElementStyle[prop];
    };
    return stringStyle;
  };
  /**
   * Checks that the classes are specified for an element and
   * that they are specified using an array.
   * If the classes are not passed or are not correct, returns array with one empty string.
   * @returns {array} The classes for DOM element.
   */
  get classes() {
    let classes = this.domElementClasses;
    if (classes === undefined || !Array.isArray(classes)) {
      return classes = [''];
    };
    return classes;
  };
  /**
   * Checks the existence of attributes and their type object.
   * If the attributes are not passed or are not correct, returns empty object.
   * @returns {object} The attributes for DOM element.
   */
  get attributes() {
    let attributes = this.domElementAttributes;
    if (attributes === undefined || typeof attributes !== 'object') {
      return attributes = {};
    };
    return attributes;
  };
  /**
   * Checks for the text content of an element
   * If the text content are not passed or are not correct, returns empty string.
   * @returns {string} The text content for DOM element.
   */
  get text() {
    let textContent = this.domElementText;
    if (textContent === undefined || typeof textContent !== 'string') {
      return textContent = '';
    };
    return textContent;
  };
  /**
     * Convert a object containing descriptions of dom element into a DOM node.
     * @param {DomElement} elementDescription - object containing description of the DOM node.
     * @return {DOM element} DOM element.
     */
};

export { DomElement };