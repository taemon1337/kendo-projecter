define(function(require) {
    var kendo           = require('kendo');
    
    return kendo.data.Model.define({
        id: "_id",
        
        fields: {
            _id: { type: "string", nullable: false, editable: false },
            name: { type: "string", editable: true },
            description: { type: "string", editable: true },
            fieldname: { type: "string", editable: true },
            user_ids: { 
                defaultValue: [], 
                editable: true, 
                nullable: false
            },
            
            usernames: { 
                defaultValue: [],
                editable: true,
                template: function(usernames) {
                    return usernames.join();
                }
            }
        }
        
    });
});