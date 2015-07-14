define(function(require) {
    var kendo           = require('kendo');
    var dataSource      = require('datasources/tasks');
    
    return function(container, options) {
        return $("<select class='full' multiple='multiple' data-bind='value: task_ids'></select>")
            .appendTo(container)
            .kendoMultiSelect({
                placeholder: "select tasks...",
                dataTextField: "title",
                dataValueField: "_id",
                valuePrimitive: true,
                dataSource: dataSource(),
            }).data("kendoMultiSelect");
    }
});