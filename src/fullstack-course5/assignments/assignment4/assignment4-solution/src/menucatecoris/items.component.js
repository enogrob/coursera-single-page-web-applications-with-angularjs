(function () {
  'use strict';

angular.module('MenuApp')
.component('items', {
  bindings: {
    items: '<'
  },
  templateUrl: 'src/menucatecoris/templates/menuapp.items.component.html'
});

})();
