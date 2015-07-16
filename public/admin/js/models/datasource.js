define(function(require) {
    var kendo           = require('kendo');
    
    return kendo.data.Model.define({
        id: "_id",
        
        fields: {
            _id: { type: "string", nullable: false, editable: false },
            name: { type: "string", editable: true },
            host: { type: "string", editable: true },
            basename: { type: "string", editable: true },
            basepath: { type: "string", editable: true },
            
            read_options: { defaultValue: {}, editable: true },
            create_options: { defaultValue: {}, editable: true },
            update_options: { defaultValue: {}, editable: true },
            destroy_options: { defaultValue: {}, editable: true },
            
            kendo_options: { defaultValue: {}, editable: true }

        }
        
    });
});