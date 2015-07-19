define(function(require) {
  var kendo         = require('kendo');
  var windowHelper  = require('helpers/window');
  
  var template = require('text!../../../templates/datasources/show.html');

  return {
      view: function(datasource) {
        window.datasource = datasource;
        var el = $("<div></div>");  
        var win = windowHelper.open( el, { title: "Data Source: " + datasource.name });
        
        var model = kendo.observable({
          datasource: datasource,
          
          testRead: function(e) {
            var ds = datasource.getInstance();
            window.ds = ds;
            ds.fetch(function() {
              var testEl = $("<div></div>");
              var w = windowHelper.open( testEl, { title: "Test Read Response:", height: '62%' });
              w.wrapper.find('.k-window-content').append( "<pre>" + HtmlEncode(JSON.stringify(this.data(), null, 2)) + "</pre>" );
            });
          }
          
        });

        var showView = new kendo.View( template, {
          model: model
        });
        
        showView.render( win.wrapper.find('.k-window-content'));

        return showView;
      }
  }
});