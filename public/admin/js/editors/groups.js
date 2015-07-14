define(function(require) {
    var kendo           = require('kendo');
    var dataSource      = require('datasources/groups');
    
    return function(container, options) {
        return $("<select class='full' multiple='multiple' data-bind='value: group_ids'></select>")
            .appendTo(container)
            .kendoMultiSelect({
                placeholder: "select roles...",
                dataTextField: "name",
                dataValueField: "_id",
                valuePrimitive: true,
                dataSource: dataSource(),
            }).data("kendoMultiSelect");
    }
});