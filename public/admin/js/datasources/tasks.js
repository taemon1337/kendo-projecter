define(function(require) {
    var kendo           = require('kendo');
    var routes          = require('jfb/routes');
    var taskModel       = require('models/task');
    var popup           = require('helpers/popup');
    var winHelper       = require('helpers/window');
    
    return function() {
        var name = "tasks";
        var base = routes.api + "/" + name;
        
        return new kendo.data.DataSource({
            schema: {
                data: name,
                total: "total",
                model: taskModel
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
                        return JSON.stringify({ task: data });
                    }
                }
           },
           error: function(e) {
                if(e.xhr && e.xhr.statusText == "Internal Server Error") {
                    winHelper.open(e.xhr.responseText);
                }
           },
           requestEnd: function() {
               
           }
        });
    };
});