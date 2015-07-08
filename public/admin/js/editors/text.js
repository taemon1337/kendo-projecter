define(function(require) {
    return function(container, options) {
        return $("<input class='k-textbox full' data-bind='value: "+options.field+"' />").appendTo(container);
    }
});