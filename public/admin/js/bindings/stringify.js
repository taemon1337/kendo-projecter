define(function(require) {
    var kendo   = require('kendo');
    var CHANGE  = "change";
    var VALUE   = "stringify";

    kendo.data.binders[VALUE] = kendo.data.Binder.extend({
        refresh: function(e) {
            var text = this.bindings[VALUE].get();
        
            if(text == null) {
                text = '';
            }
                
            $(this.element).text( JSON.stringify(text, null, 2));
        }
    });
});
