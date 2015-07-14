define(function(require) {
    var kendo           = require('kendo');
    var routes          = require('jfb/routes');
    var fieldModel       = require('models/field');
    
    return function() {
        var name = "fields";
        var base = routes.api + "/" + name;
        
        return new kendo.data.DataSource({
            schema: {
                data: "fields",
                total: "total",
                model: fieldModel
            },
            transport: {
                read: {
                    url: base,
                    dataType: "json",
                    contentType: "application/json"
                },
                create: {
                    url: base,
                    method: "POST",
                    dataType: "json",
                    contentType: "application/json"
                },
                update: {
                    url: function(data) {
                        return base + "/" + data._id;    
                    },
                    method: "PUT",
                    dataType: "json",
                    contentType: "application/json"
                },
                destroy: {
                    url: function(data) {
                        return base + "/" + data._id;    
                    },
                    method: "DELETE",
                    dataType: "json",
                    contentType: "application/json"
                },
                parameterMap: function(data, type) {
                    if(type === 'create' || type === 'update') {
                        return JSON.stringify({ field: data });
                    }
                }
           },
           error: function() {
               
           },
           requestEnd: function() {
               
           }
        });
    };
});