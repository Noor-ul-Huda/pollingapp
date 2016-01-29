angular.module('app.controller',['ngRoute'])

.controller('homeCtrl', function($scope,$http){
    console.log('in home ctrl');
    $scope.addQuestion = function(){
        $http.get('/templates/addQuestion').success(function(response){})
    }
})
