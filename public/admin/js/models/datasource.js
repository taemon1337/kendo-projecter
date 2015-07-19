define(function(require) {
    var kendo           = require('kendo');
    
    return kendo.data.Model.define({
        id: "_id",
        
        init: function(data) {
            
            kendo.data.Model.fn.init.call(this, data);

            this.bind('change', function(e) {
                if(e.field == 'name' || e.field == 'basepath' || e.field == 'host' || e.field == 'basename') {
                    var name = this.get('basename');
                    if(e.field == 'name') {
                        name = this.get(e.field);
                        this.set('basename', name);
                    }
                    var host = this.get('host');
                    var path = this.get('basepath');
                    var idField = this.get('schema.id');
                    var url  = [host,path,name].join('/').replace('//','/');

                    this.set('schema.data', name);
                    this.set('read_url', url);
                    this.set('create_url', url);
                    this.set('update_url', "function(data) { return '"+ url + "/' + data."+idField+"; }");
                    this.set('destroy_url', "function(data) { return '"+ url + "/' + data."+idField+"; }");
                }
                return true;
            });
        },
        
        fields: {
            _id: { type: "string", nullable: false, editable: false },
            name: { type: "string", editable: true },
            host: { type: "string", editable: true },
            basename: { type: "string", editable: true },
            basepath: { type: "string", editable: true },
            
            //schema_data: { type: "string", editable: true, defaultValue: "" },
            //schema_total: { type: "string", editable: true, defaultValue: "total" },
            schema: { defaultValue: { data: null, total: 'total', id: '_id' }},
            
            dataType: { type: "string", editable: true, defaultValue: "json" },
            contentType: { type: "string", editable: true, defaultValue: "application/json" },
            
            read_url: { type: "string", editable: true, defaultValue: "" },
            create_url: { type: "string", editable: true, defaultValue: "" },
            update_url: { type: "string", editable: true, defaultValue: "" },
            destroy_url: { type: "string", editable: true, defaultValue: "" },
            
            read_method: { type: "string", editable: true, defaultValue: "GET" },
            create_method: { type: "string", editable: true, defaultValue: "POST" },
            update_method: { type: "string", editable: true, defaultValue: "PUT" },
            destroy_method: { type: "string", editable: true, defaultValue: "DELETE" },

            parameterMap: { 
                type: "string", 
                defaultValue: "function(type, data) { \n  if(type === 'create' || type === 'update') {\n    return JSON.stringify({ model: data })\n  }\n}",
                editable: true
            },
            error_function: { 
                type: "string", 
                defaultValue: "function(resp) {}", 
                editable: true 
            },
            requestEnd: { 
                type: "string", 
                defaultValue: "function(resp) {}", 
                editable: true 
            }
        },
        
        show: function( el ) {
            window.ds = this;
            var textarea = $("<textarea class='k-textbox full'></textarea>").css({ height: '100%' });
            $(textarea).append( JSON.stringifyWithFunctions(this.kendo_options(), null, 4)).appendTo( el );
            return textarea;
        },
        
        kendo_options: function() {
            return {
                schema: {
                    data: this.get('schema.data'),
                    total: this.get('schema.total'),
                    model: {
                        id: this.get('schema.id')
                    }
                },
                transport: {
                    read: {
                        url: this.get('read_url'),
                        method: this.get('read_method'),
                        dataType: this.get('dataType'),
                        contentType: this.get('contentType')
                    },
                    create: {
                        url: this.get('create_url'),
                        method: this.get('create_method'),
                        dataType: this.get('dataType'),
                        contentType: this.get('contentType')
                    },
                    update: {
                        url: this.get('update_url'),
                        method: this.get('update_method'),
                        dataType: this.get('dataType'),
                        contentType: this.get('contentType')
                    },
                    destroy: {
                        url: this.get('destroy_url'),
                        method: this.get('destroy_method'),
                        dataType: this.get('dataType'),
                        contentType: this.get('contentType')
                    },
                    parameterMap: this.get('parameterMap')
                },
                error: this.get('error_function'),
                requestEnd: this.get('requestEnd')
            }
        },
        
        getInstance: function() {
            return new kendo.data.DataSource( JSON.parseWithFunctions(this.kendo_options()));
        }
        
    });
});