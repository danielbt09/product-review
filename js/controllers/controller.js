var app = angular.module('formApp', ['formApp.services']);


app.controller('formController', ['$scope', 'PhpService',
    function ($scope, PhpService) {
        $scope.client = {};
        $scope.addReview = function () {
            var addReview = {};
            addReview = $.param({"add_review": JSON.stringify($scope.client)}); 
            PhpService.addReview(addReview);
        };
    }]);