define(function(require) {
    var kendo           = require('kendo');
    var dataSource      = require('datasources/tasks');
    
    return function(container, options) {
        return $("<input class='full' data-bind='value: "+options.field+"' />")
            .appendTo(container)
            .kendoDropDownList({
                optionLabel: "select task...",
                dataTextField: "name",
                dataValueField: "_id",
                valuePrimitive: true,
                dataSource: dataSource(),
            }).data("kendoDropDownList");
    }
});