define(function(require) {
  var kendo           = require('kendo');
  var users           = require('datasources/users');
  var userShow        = require('views/users/show');

  var template = require('text!../../../templates/users/index.html');

  return {
    view: function() {
      
      var model = kendo.observable({
        users: users(),

        dataBound: function(e) {
          var grid = e.sender;
          
          grid.tbody.find('.k-grid-show').on('click',function(ee) {
            var user = grid.dataItem( $(ee.currentTarget).parents('tr') );
            userShow.view(user);
          });
          
        }
        
      });

      var indexView = new kendo.View( template, {
        model: model,
      });

      return indexView;      
    }
  }
});