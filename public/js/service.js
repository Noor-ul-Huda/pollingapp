angular.module('app.service',[])

.service('myservice', function ($http) {
     array = []
    question = {
        question: object
    };
    this.showQuestions = function (questions) {
        $http.get('/data').success(function (res) {
            //$scope.questions.push(res.question);
            //console.log(res);
            questionsArray = res;
            for (i in questionsArray) {
                $('<li />', {html: questionsArray[i].question}).appendTo('ul');
                //console.log(questionsArray[i].question);
                questions.push(questionsArray[i]);
            }
            console.log(questions);
        })

    }
    /*this.getques = function (selectedques) {
        console.log(this.question);
       selectedques =  this.question;
    }
    this.setques = function (ques) {
        this.question = ques;
    }*/
    this.getques = function() {
        console.log(question.question);
        return this.receiverName;
    }
    this.setques = function(receiver){

        question.question = receiver;
        console.log(this.receiverName);
    }
});