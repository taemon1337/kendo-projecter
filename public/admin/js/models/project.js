define(function(require) {
    var kendo           = require('kendo');
    
    return kendo.data.Model.define({
        id: "_id",
        
        fields: {
            _id: { type: "string", nullable: false, editable: false },
            name: { type: "string", editable: true },
            description: { type: "string", editable: true },
            workflow_id: { type: "string", editable: true, nullabel: false },
            group_ids: { defaultValue: [], editable: true, nullable: false },
            
            workflowname: { 
                type: "string", 
                editable: false,
                template: function(workflowname) {
                    return workflowname;
                }
            },
            
            groupnames: { 
                defaultValue: [],
                editable: false,
                template: function(groupnames) {
                    return groupnames.join();
                }
            }
        }
        
    });
});