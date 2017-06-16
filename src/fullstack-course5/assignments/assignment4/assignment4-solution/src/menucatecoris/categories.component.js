(function () {
  'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: "src/menucatecoris/templates/menuapp.categories.component.html",
  bindings: {
    categories: "<"
  }
});

})();
