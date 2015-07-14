define(function(require) {
    return function(container, options) {
        return $("<div data-bind='html: preview()'></div>").appendTo(container);
    }
});