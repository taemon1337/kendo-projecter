define(function(require) {
  var kendo   = require('kendo');

  var router = new kendo.Router({ pushState: true, root: "/admin" });

  return router;
});