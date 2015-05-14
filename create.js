module.exports = create;

var GLMAT_ARRAY_TYPE = require('./common').GLMAT_ARRAY_TYPE();

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
    var out = new GLMAT_ARRAY_TYPE(3)
    out[0] = 0
    out[1] = 0
    out[2] = 0
    return out
}