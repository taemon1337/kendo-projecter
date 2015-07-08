define(function(require) {
    return function(container, options) {
        return $("<textarea rows='5' class='k-textbox full' data-bind='value: "+options.field+"'></textarea>").appendTo(container);
    }
});