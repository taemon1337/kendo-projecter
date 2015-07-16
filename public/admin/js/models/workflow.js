define(function(require) {
    var kendo           = require('kendo');
    
    return kendo.data.Model.define({
        id: "_id",
        
        fields: {
            _id: { type: "string", nullable: false, editable: false },
            name: { type: "string", editable: true },
            description: { type: "string", editable: true },
            form_id: { type: "string", editable: true, nullable: false },
            
            formname: { 
                type: "string",
                editable: false,
                template: function(formname) {
                    return formname;
                }
            },

            task_ids: {
                defaultValue: [],
                editable: true,
            },
            
            tasknames: { 
                defaultValue: [], 
                editable: true,
                template: function(tasknames) {
                    return tasknames.join();
                }
            }
        }
        
    });
});