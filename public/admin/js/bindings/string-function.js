define(function(require) {
    var kendo   = require('kendo');
    var CHANGE  = "change";
    var VALUE   = "stringFunction";

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
        
            if(val && this.stringFunctionTest(val)) {
                this.bindings[VALUE].set( JSON.stringifyFunctions(val, null, 2) );
            }
        
            this.initChange = false;
        },
        stringFunctionTest: function(str) {
            return (typeof this.str2function(str) == 'function');
        },
        str2function: function(str) {
            try {
                return eval("("+str+")");
            } catch(e) {
                alert("Error: Could not eval string to function!\n" + e);
            }
        },
        refresh: function(e) {
            if(!this._initChange) {
                var value = this.bindings[VALUE].get();
        
                if(value) {
                this.element.value = value;
                }
            }
            this._initChange = false;
        },
        destroy: function() {
            $(this.element).off(this.eventName, this._change);
        }
    });
});
