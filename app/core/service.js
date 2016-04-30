var is = require('is_js');

module.exports = service;

/**
 * Why this? Turns more explicity the type of component to build (works like a factory).
 * In future, can be used to set meta information (in constructor prototype) or work like a
 * instance creation interceptor
 * @param {Function} ServiceConstructor
 * @returns {Object}
 */
function service(ServiceConstructor) {
    return new ServiceConstructor();
}