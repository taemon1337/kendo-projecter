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
        
        change: function() {
            this._initChange = this.eventName != CHANGE;

            try {
                var json = JSON.parse( this.element.value );
                this.bindings[VALUE].set( JSON.stringify(json, null, 4) );
            } catch(err) {
                alert("Invalid JSON! \n" + err.message);
            }

            this._initChange = false;
        },
        
        refresh: function() {
            if (!this._initChange) {
                var value = this.bindings[VALUE].get();

                if (value == null) {
                    value = "";
                }

                this.element.value = value;
            }

            this._initChange = false;
        },

        destroy: function() {
            $(this.element).off(this.eventName, this._change);
        }
    });
});
