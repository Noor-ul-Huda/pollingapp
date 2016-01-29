
angular.module('app',['ngRoute','app.service'])
    .controller('homeCtrl',['$scope', '$http','myservice', function($scope,$http,myservice){
        $scope.questions = [];
        var questionsArray = [];
        $scope.addQuestion = function(){
            //$('#addQuestionForm').show();
            location.href= '/addquestion';
        }
       //questionsArray=  myservice.showQuestions($scope.questions);
        console.log(myservice.showQuestions($scope.questions));

            $('ul').delegate('li','click', function () {

                clickedLi = $('li').index(this);
                 console.log($scope.questions[clickedLi]);
                myservice.setques($scope.questions[clickedLi]);
                location.href = '/pollingpage';
            })

        console.log(questionsArray);
        showQuestions = function() {

            return true;
        }


    }])
    .controller('addQuestionCtrl',['$http','$scope','myservice', function ($http,$scope,myservice) {
        $('#addOptionsBtn').hide();

        var optionDataArray = []


        $http.get('/addquestion');
        $scope.Add = function () {

            if ($scope.question != 'undefined' && optionDataArray.length > 0) {

                questionData = {
                    question: $scope.question,
                    options: optionDataArray
                }
                //console.log(questionData);

                $http.post('/addquestion', questionData).success(function (res) {
                    console.log(res);

                })
                $('#addQuestionForm').hide();
                location.href = '/';
            }
            else {

                alert('Enter question and its options');
            }
        }


        $scope.addOptions = function () {
            $('#option').show();
            $('#addOptionsBtn').hide();
        }
        $scope.hideAddOptionBtn = function () {
            $('#addOptionsBtn').hide()
        }

        $("#option").keyup(function (e) {
            if (e.keyCode == 13) {
                $('<li />', {html: $scope.inputOptions}).appendTo('ul.OptionList');
                //optionData.option=$scope.inputOptions;
                optionData = {
                    option: $scope.inputOptions,
                    count: 0
                }
                optionDataArray.push(optionData);
                $scope.inputOptions = '';
                $('#option').hide();
                $('#addOptionsBtn').show();
            }
        });


    }])

.controller('pollingPageController',['$scope','$http','myservice', function ($scope, $http, myservice) {
        $http.get('/pollingpage');
        console.log(myservice.getques());
}])

