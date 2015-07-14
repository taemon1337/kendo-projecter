define(function(require) {
    var kendo           = require('kendo');
    
    return kendo.data.Model.define({
        id: "_id",
        
        fields: {
            _id: { type: "string", nullable: false, editable: false },
            name: { type: "string", editable: true },
            title: { type: "string", editable: true },
            description: { type: "string", editable: true },

            element: { type: "string", editable: true },
            element_attributes: { 
                type: "string",
                defaultValue: '{ "placeholder": "..." }', 
                editable: true,
                template: function(attrs) {
                    return JSON.stringify(attrs);
                }
            },
            
            kendo_role: { type: "string", editable: true, defaultValue: '' },
            kendo_opts: { 
                type: "string",
                defaultValue: '{}',
                editable: true,
                template: function(attrs) {
                    return JSON.stringify(attrs);
                }
            }
        },
        
        build: function(container) {
            var el = this.build_element().appendTo(container);
            var el = this.build_attributes(el);
            var el = this.build_kendo_role(el);
            return $(el);
        },
        
        build_element: function() {
            var el = this.get('element');
            return $(el);
        },
        
        build_attributes: function(el) {
            var attrs = JSON.parse(this.get('element_attributes'));

            for(var name in attrs) {
                $(el).attr(name,attrs[name]);
            }
            
            return el;
        },
        
        build_title: function() {
            return $("<b>" + this.get('title') + "</b>");
        },
        
        build_kendo_options: function() {
            var opts = JSON.parse(this.get('kendo_opts'));

            if(typeof opts.dataSource == 'string') {
                var ds = opts.dataSource;
                if(window.datasources[ds]) {
                    opts.dataSource = window.datasources[ds]();
                } else {
                    alert("Could not find data source by name: " + ds);
                }
            }

            return opts;
        },
        
        build_kendo_role: function(el) {
            var role = this.get('kendo_role');
            var opts = this.build_kendo_options();
            
            if(!role.match(/^kendo/)) { return el }
            
            switch(role) {
                case "kendoDropDownList":
                    return $(el).kendoDropDownList(opts).data(role);
                case "kendoMultiSelect":
                    return $(el).kendoMultiSelect(opts).data(role);
                case "kendoComboBox":
                    return $(el).kendoComboBox(opts).data(role);
                case "kendoAutoComplete":
                    return $(el).kendoAutoComplete(opts).data(role);
                case "kendoDateTimePicker":
                    return $(el).kendoDateTimePicker(opts).data(role);
                case "kendoDatePicker":
                    return $(el).kendoDatePicker(opts).data(role);
                case "kendoTimePicker":
                    return $(el).kendoTimePicker(opts).data(role);
                case "kendoMaskedTextBox":
                    return $(el).kendoMaskedTextBox(opts).data(role);
                default:
                    return $(el);
            }
        }
        
    });
});