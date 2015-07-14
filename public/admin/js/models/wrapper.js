define(function(require) {
    var kendo           = require('kendo');
    
    return kendo.data.Model.define({
        id: "_id",
        
        fields: {
            _id: { type: "string", nullable: false, editable: false },
            name: { type: "string", editable: true },
            description: { type: "string", editable: true },

            form_wrapper: { type: "string", editable: true },
            field_wrapper: { type: "string", editable: true },
            
            form_selector: { type: "string", editable: true },
            field_selector: { type: "string", editable: true },
            title_selector: { type: "string", editable: true },

        },

        test: function(container) {
            var form_selector = this.get('form_selector');
            var field_selector = this.get('field_selector');
            var title_selector = this.get('title_selector');
            var el = this.build_form_wrapper().appendTo(container);
            var form_content = el.find( form_selector );
            
            var field_wrapper = this.build_field_wrapper().appendTo(form_content);
            this.test_field_1().appendTo( field_wrapper.find( field_selector) );
            field_wrapper.find(title_selector).append( "<b>Example 1</b>" );
            
            var field_wrapper = this.build_field_wrapper().appendTo(form_content);
            this.test_field_2().appendTo( field_wrapper.find( field_selector) );
            field_wrapper.find(title_selector).append( "<b>Example 2</b>" );
            
            return $(el);
        },
        
        test_field_1: function() {
            return $("<input class='k-textbox full' placeholder='example input...' />");  
        },
        
        test_field_2: function() {
            return $("<textarea rows='6' class='k-textbox full' placeholder='example textarea...'></textarea>");  
        },

        build_form_wrapper: function() {
            return $(this.get('form_wrapper'));
        },
        
        build_field_wrapper: function() {
            return $(this.get('field_wrapper'));
        }
        
    });
});