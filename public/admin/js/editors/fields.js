define(function(require) {
    var kendo           = require('kendo');
    var dataSource      = require('datasources/fields');
    
    return function(container, options) {
        return $("<select class='full' multiple='multiple' data-bind='value: field_ids'></select>")
            .appendTo(container)
            .kendoMultiSelect({
                placeholder: "select fields...",
                dataTextField: "name",
                template: "#= data.name # (#= data.field #)",
                dataValueField: "_id",
                valuePrimitive: true,
                dataSource: dataSource(),
            }).data("kendoMultiSelect");
    }
});