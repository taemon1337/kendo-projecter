define(function(require) {
    var kendo           = require('kendo');
    var dataSource      = require('datasources/users');
    
    return function(container, options) {
        return $("<select class='full' multiple='multiple' data-bind='value: user_ids'></select>")
            .appendTo(container)
            .kendoMultiSelect({
                placeholder: "select users...",
                dataTextField: "username",
                dataValueField: "_id",
                valuePrimitive: true,
                dataSource: dataSource(),
            }).data("kendoMultiSelect");
    }
});