define(function(require) {
    var kendo           = require('kendo');
    var dataSource      = require('datasources/users');
    
    return function(container, options) {
        return $("<select class='full' multiple='multiple' data-bind='value: "+options.field+"'></select>")
            .appendTo(container)
            .kendoMultiSelect({
                placeholder: "select users...",
                dataTextField: "name",
                dataValueField: "_id",
                valuePrimitive: true,
                dataSource: dataSource(),
            }).data("kendoMultiSelect");
    }
});