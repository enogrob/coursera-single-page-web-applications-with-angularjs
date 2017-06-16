(function (angular) {
  'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);

ItemController.$inject = ['itemsData'];
function ItemController(itemsData) {
  var $ctrl = this;

  $ctrl.categories = itemsData.categories;
  $ctrl.items = itemsData.menu_items;
}

})(angular);
