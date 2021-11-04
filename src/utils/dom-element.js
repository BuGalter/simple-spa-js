/**
 * dom-element module.
 * @module utils/dom-element
 */

/** Class representing DOM element.*/
class DomElement {
  /**
   * Create a DOM Element.
   * @param {object} elementDescription - Description of the DOM element being created. 
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
}

export { DomElement };