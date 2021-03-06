// Pattern 5
let inherit = (function () {
    let F = function () {};
    return function (C, P) {
        F.prototype = P.prototype;
        C.prototype = new F();
        C.uber = P.prototype;
        C.prototype.constructor = C;
} }());

module.exports.inherit = inherit;