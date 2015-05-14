var app = angular.module('formApp.services', ['ngResource']);


app.factory('PhpService', ['$resource', function ($resource) {

        return $resource('', null, {
            addReview: {method: 'POST', url: 'addReview.php', headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        });
    }
]);