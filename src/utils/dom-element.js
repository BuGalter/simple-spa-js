/**
 * dom-element module.
 * @module simple-spa-js/dom-element
 * @see module: simple-spa-js/app-descpription
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
          return this.domElementTag = 'div';
    };
    return this.domElementTag;
  };
  /**
     * Convert a object containing descriptions of dom element into a DOM node.
     * @param {DomElement} elementDescription - object containing description of the DOM node.
     * @return {DOM element} DOM element.
     */
};

export { DomElement };