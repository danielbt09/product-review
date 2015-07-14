var app = angular.module('formApp', ['formApp.services']);

app.controller('formController', ['$scope', '$http', 'PhpService', function ($scope, $http, PhpService) {
    $scope.client = {};
    $scope.addReview = function () {
        var addReview = {};
        addReview = $.param({"add_review": JSON.stringify($scope.client)});
        PhpService.addReview(addReview);
        showMessage();
        hideMessage();
        $scope.formReset();
        $scope.refreshFeedback();
    };
    $scope.master = {FName:"", Email:"", ReviewTextarea:"", Rating:""};

    $scope.formReset = function() {
        $scope.client = angular.copy($scope.master);
        $scope.frm.$setPristine();
    };
    $scope.refreshFeedback = function () {

    $http.get('showReviews.php')
        .success(function(data, status, headers, config) {
            $scope.reviews = data;
            console.log(data);
        })
        .error(function(data, status, headers, config) {
            console.log('error');
        });
    }
    $scope.refreshFeedback();
        $scope.currentPage = 0;
        $scope.pageSize = 20;
            $scope.numberOfPages=function(){
                return Math.ceil($scope.reviews.length/$scope.pageSize);   
                console.log(Math.ceil);             
            }
}]);
$('.user-feedback').fadeIn(0);
function showMessage() {
    $( '.form-review--succesful-message' ).fadeIn();
}
function hideMessage() {
    setTimeout(function(){ $( '.form-review--succesful-message' ).fadeOut(); }, 1000);
}

    //We already have a limitTo filter built-in to angular,
    //let's make a startFrom filter
    app.filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    });