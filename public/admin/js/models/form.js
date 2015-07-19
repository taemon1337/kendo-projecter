define(function(require) {
    var kendo               = require('kendo');
    var wrapperDataSource   = require('datasources/wrappers');
    var fieldDataSource     = require('datasources/fields');
    
    return kendo.data.Model.define({
        id: "_id",
        
        fields: {
            _id: { type: "string", nullable: false, editable: false },
            name: { type: "string", editable: true },
            description: { type: "string", editable: true },
            wrapper_id: { type: "string", editable: true },
            wrappername: { 
                type: "string", 
                editable: true,
                template: function(wrappername) {
                    return wrappername;
                }
            },
            
            field_ids: { defaultValue: [], nullable: false, editable: true },
            fieldnames: { 
                defaultValue: [],
                template: function(fieldnames) {
                    return fieldnames.join();
                }
            }
        },
        
        build: function(container) {
            var form = this;
            var wrappers = wrapperDataSource();
            var fields = fieldDataSource();
            
            wrappers.fetch(function() {
                var wrapper = wrappers.get(form.get('wrapper_id'));
                var form_selector = wrapper.get('form_selector');
                var field_selector = wrapper.get('field_selector');
                var title_selector = wrapper.get('title_selector');
                var el = wrapper.build_form_wrapper().appendTo(container);
                $(el).attr('data-id',form.id);
                var form_content = el.find( form_selector );

                fields.fetch(function() {
                    form.get('field_ids').forEach(function(id) {
                        var field = fields.get(id);
                        var field_wrapper = wrapper.build_field_wrapper().appendTo(form_content);
                        field.build( field_wrapper.find( field_selector) );
                        field_wrapper.attr('data-id', field.id);
                        field_wrapper.find(title_selector).append( field.build_title() );
                    });
                    
                    var actionWrapper = wrapper.build_field_wrapper().appendTo(form_content);
                    actionWrapper.attr('class','k-edit-buttons k-state-default');
                    actionWrapper.find( title_selector ).append("&nbsp;");
                    form.build_actions().appendTo( actionWrapper.find( field_selector ) );
                });
            });
        },
        
        build_actions: function() {
            var div = $("<div></div>");
            var b1 = $("<a href='#' class='k-button k-button-icontext k-primary k-grid-update'><span class='k-icon k-update'></span>Save</a>");
            var b2 = $("<a href='#' class='k-button k-button-icontext k-grid-cancel'><span class='k-icon k-cancel'></span>Cancel</a>");
            return $(div).append(b1).append(b2);
        },
        
        require_field: function(field, el) {
            
        },
        
        disable_field: function(field, el) {
            
        },
        
        remove_field: function(field, el) {
            $(el).find("[data-id='"+this.id+"']").find("[data-id='"+field.id+"']").remove();
        }
        
    });
});