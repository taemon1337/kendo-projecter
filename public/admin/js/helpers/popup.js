define(function(require) {
    var kendo       = require('kendo');

    var createAlertBox = function(type) {
        var div = $("<div class='alert alert-"+type+" alert-dismissable' role='alert'></div>").css({ position: 'absolute', width: '50%', left: '25%', top: '2%', zIndex: '9999' });
        var btn = $("<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>").appendTo(div);
        $(btn).on('click', function() { $(div).remove() });
        return $(div);
    };

    return {
        open: function(content, type, opts) {
            var options = $.extend({}, {
                
            }, opts);
            var div = createAlertBox(type).append(content);
            div.prependTo('body');
        },
        warn: function(content) {
            this.open(content, 'warning');
        },
        info: function(content) {
            this.open(content, 'info');
        },
        error: function(content) {
            this.open(content, 'danger');
        },
        success: function(content) {
            this.open(content, 'success');
        }
    }
});