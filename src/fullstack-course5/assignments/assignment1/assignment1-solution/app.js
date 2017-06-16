(function (){

'use strict';

angular.module("LunchCheckerApp", [])
.controller("LunchCheckerController", LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope){
  $scope.dishes = "";
  $scope.result = "";

  $scope.getDishes = function (){
    var dishes = $scope.dishes;
    dishes = dishes.split(",").filter(Boolean).join(",");
    if (dishes.length == "") {
      $scope.result = "Please enter data first";
    } else {
        var dishes_nr = dishes.split(",").length;

        if ((dishes_nr <= 3) && (dishes_nr >= 1)){
          $scope.result = "Enjoy!";
        } else {
          $scope.result = "Too much!";
        }
    }
  }

  $scope.resultClear = function () {
    $scope.result = "";
  }

}

}
)();
