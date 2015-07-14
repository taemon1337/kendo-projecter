define(function(require) {
    var kendo               = require('kendo');
    
    return kendo.data.Model.define({
        id: "_id",
        
        fields: {
            _id: { type: "string", nullable: false, editable: false },
            name: { type: "string", editable: true },
            description: { type: "string", editable: true },
            group_ids: { defaultValue: [], editable: true },
            
            groupnames: { 
                defaultValue: [],
                editable: true,
                template: function(groupnames) {
                    return groupnames.join();
                }
            },
            
            usernamess: { 
                defaultValue: [], 
                editable: true,
                template: function(usernames) {
                    return usernames.join();
                }
            },
            
            required_field_ids: { defaultValue: [], editable: true },
            editable_field_ids: { defaultValue: [], editable: true },
            viewable_field_ids: { defaultValue: [], editable: true },
        }

    });
});