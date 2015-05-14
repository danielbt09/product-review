var app = angular.module('formApp', ['formApp.services']);


app.controller('formController', ['$scope', 'PhpService', function ($scope, PhpService) {
    $scope.client = {};
    $scope.addReview = function () {
        var addReview = {};
        addReview = $.param({"add_review": JSON.stringify($scope.client)});
        PhpService.addReview(addReview);
        showMessage();
        hideMessage();
        $scope.formReset();
    };
    $scope.master = {FName:"", Email:"", ReviewTextarea:"", Rating:""};

    $scope.formReset = function() {
        $scope.client = angular.copy($scope.master);
        $scope.frm.$setPristine();
    };
}]);

app.controller('reviewsController', ['$scope', '$http', function ($scope, $http) {
    $http.get('showReviews.php')
        .success(function(data, status, headers, config) {
            $scope.reviews = data;
            console.log(data);
        })
        .error(function(data, status, headers, config) {
            console.log('error');
        });
}]);

function showMessage() {
    $( '.form-review--succesful-message' ).fadeIn();
}
function hideMessage() {
    setTimeout(function(){ $( '.form-review--succesful-message' ).fadeOut();; }, 1000);
}