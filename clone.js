module.exports = clone;

var GLMAT_ARRAY_TYPE = require('./common').GLMAT_ARRAY_TYPE();

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
    var out = new GLMAT_ARRAY_TYPE(3)
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    return out
}