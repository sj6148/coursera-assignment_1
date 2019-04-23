(function() {
  'use strict';

  angular.module('Assignment', [])
    .controller('AssignmentController', AssignmentController);

  AssignmentController.$inject = ['$scope', '$filter'];

  function AssignmentController($scope, $filter) {
    $scope.lunchItems = "";
    $scope.message = "";
    $scope.placeholder = "List comma separated dishes you usually have for lunch";
    $scope.result = "";

    $scope.CheckItemsCount = function() {
      var count = getItemsCount($scope.lunchItems);
      console.log("count is " + count);
      if (count == 0) {
        $scope.message = "Please enter data first";
      } else if (count > 0 && count <= 3) {
        $scope.message = "Enjoy it!";
      } else if (count > 3) {
        $scope.message = "Too Much!"
      }
    };

    function getItemsCount(string) {
      console.log("text string passing is " + string);
      var items = [];
      if ($scope.lunchItems.length > 0) {
        //var array = string.trim().split(",");
        items = string.trim().split(",").filter(item => item.trim() != "");
        $scope.result = "You entered " + items.length + " lunch item(s): " + items.toString();
        console.log("items new array is " + items);
      } else {
        $scope.message = "";
      }
      return items.length;
    }

    $scope.removeMsg = function() {
      $scope.message = "";
      $scope.result = "";
    }

    $scope.verifyResult = function() {
      if ($scope.lunchItems == "") {
        $scope.removeMsg();
      }
    }
  }

})();
