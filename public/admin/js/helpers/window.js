define(function(require) {
   var kendo        = require('kendo');
   
   var getOptions = function(opts) {
      return $.extend({}, {
            width: "50%",
            height: "60%",
            position: {
                top: "10%",
                left: "25%"
            },
            center: true,
            actions: ['minimize','maximize','close'],
            close: function() {
               this.destroy();
            }
      }, opts);
   };
   
   return {
       open_view: function(view, opts) {
         var options = getOptions(opts);
         var win = $("<div></div>").appendTo( $('body') ).kendoWindow(options).data('kendoWindow');
         win.wrapper.find(".k-window-content").append( view.render() );
         return win;
       },
       open: function(el, opts) {
         var options = getOptions(opts);
         var win = $("<div></div>").appendTo( $('body') ).kendoWindow(options).data('kendoWindow');
         win.wrapper.find(".k-window-content").append( el );
         return win;
       },
       open_html: function() {
          
       }
   };
});