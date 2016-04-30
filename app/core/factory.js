var is = require('is_js');

module.exports = factory;

/**
 * Why this? Turns more explicity the type of component to build (works like a factory).
 * In future, can be used to set meta information (in constructor prototype) or work like a
 * instance creation interceptor
 * @param {Function} FactoryConstructor
 * @returns {Object}
 */
function factory(FactoryConstructor) {
    return new FactoryConstructor();
}