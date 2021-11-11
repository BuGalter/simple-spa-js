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
  constructor(elementDescription) {
    this.domElementTag = elementDescription.domElementTag;
    this.domElementClasses = elementDescription.domElementClasses;
    this.domElementStyle = elementDescription.domElementStyle;
    this.domElementAttributes = elementDescription.domElementAttributes;
    this.domElementText = elementDescription.domElementText;
  };
  /**
   * Checks that the tag name is correct.
   * @returns {string} The tag name.
   */
  get tag() {
    if (this.domElementTag === undefined ||
        this.domElementTag === '' ||
        typeof this.domElementTag !== 'string') {
          this.domElementTag = 'div';
    };
    return this.domElementTag;
  };
  /**
   * Checks that style element is correct and turns the object into a string,
   * if the styles are not passed or are not correct, returns an empty string.
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
     * Convert a object containing descriptions of dom element into a DOM node.
     * @param {DomElement} elementDescription - object containing description of the DOM node.
     * @return {DOM element} DOM element.
     */
};

export { DomElement };