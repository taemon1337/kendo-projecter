define(function(require) {
    var kendo           = require('kendo');
    
    
    return kendo.data.Model.define({
        id: "_id",
        
        fields: {
            _id: { type: "string", nullable: false, editable: false },
            name: { type: "string", editable: true },
            description: { type: "string", editable: true },
            wrapper_id: { type: "string", editable: true },
            wrapper: { type: "string", editable: true },
            
            field_ids: { defaultValue: [] },
            form_fields: { 
                defaultValue: [],
                template: function(form_fields) {
                    return JSON.stringify(form_fields.toJSON());
                }
            }
        },
        
        build: function() {
            
        }
    });
});