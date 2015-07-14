define(function(require) {
    var kendo           = require('kendo');
    
    return kendo.data.Model.define({
        id: "_id",
        
        fields: {
            _id: { type: "string", nullable: false, editable: false },
            username: { type: "string", editable: true },
            group_ids: { defaultValue: [], editable: true, nullable: false },
            
            groupnames: { 
                defaultValue: [],
                editable: true,
                template: function(groupnames) {
                    return groupnames.join();
                }
            }
        }
        
    });
});