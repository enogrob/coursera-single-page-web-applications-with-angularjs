(function () {
'use strict';

angular.module('NameCalculator',[])
.controller('NameCalculatorController', function($scope){
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.displayNumeric = function(){
    var totalNameValue = 0;
    $scope.totalValue =
    calculateNumericForString($scope.name);
  };

  function calculateNumericForString(string){
    var totalStringvalue = 0;
    for(var i = 0 ;i < string.length; i++){
      totalStringvalue += string.charCodeAt(i);
    }
    return totalStringvalue;

  };
  }
);

})();
