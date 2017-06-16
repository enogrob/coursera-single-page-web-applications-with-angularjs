(function (angular) {
  'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'src/menucatecoris/templates/menuapp.home.state.html'
  });

$stateProvider.state('categories', {
    url: '/categories',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    },
    controller: 'CategoriesController as $ctrl',
    templateUrl: 'src/menucatecoris/templates/menuapp.categoreis.state.html'
  });

  $stateProvider.state('items', {
    url: '/categoreis/{categoryShortName}/items',
    resolve: {
      itemsData: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    },
    controller: 'ItemController as $ctrl',
    templateUrl: 'src/menucatecoris/templates/menuapp.items.state.html'
  });

}

})(angular);
