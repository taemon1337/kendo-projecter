define(function(require) {
    var kendo   = require('kendo');
    var CHANGE  = "change";
    var VALUE   = "json";

    kendo.data.binders[VALUE] = kendo.data.Binder.extend({
        init: function(element, bindings, options) {
            //call the base constructor
            kendo.data.Binder.fn.init.call(this, element, bindings, options);

            this._change = $.proxy(this.change, this);
            this.eventName = options.valueUpdate || CHANGE;

            $(this.element).on(this.eventName, this._change);

            this._initChange = false;
        },
        change: function(e) {
            this._initChange = this.eventName != CHANGE;
        
            var val = this.element.value;
        
            if(val && this.parseJsonTest(val)) {
                this.bindings[VALUE].set( val );
            }
        
            this.initChange = false;
        },
        parseJsonTest: function(j) {
            try {
                return JSON.parse(j);
            } catch(e) {
                alert(e);
            }
        },
        refresh: function(e) {
            if(!this._initChange) {
                var value = this.bindings[VALUE].get();
        
                if(value) {
                this.element.value = JSON.stringify(JSON.parse(value), null, 2);
                }
            }
            this._initChange = false;
        },
        destroy: function() {
            $(this.element).off(this.eventName, this._change);
        }
    });
});
