/**
 * __server-side module.
 * @module simple-spa-js/app-descpription/__server-side.
 * @see module: simple-spa-js/dom-element.
 */

 export const serverSideElement = {
  /**
   * Item description short information about the server side of application.
   * @type {DOM element}
   */
  domElementTag: 'p',
  domElementClasses: ['app-description__server-side'],
  domElementStyle: {
    'color': 'brown;',
    'text-align': 'center;',
  },
  domElementText: 'На стороне сервера API написанное на NodeJS с использованием Express\
   которое позволяет работать с данными из БД mySQL' 
};
