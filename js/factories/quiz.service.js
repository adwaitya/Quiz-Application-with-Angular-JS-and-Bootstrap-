
(function (){
'use strict';

 angular
        .module('myBlog')
        .factory('quizService',quizService);

        quizService.$inject = ['DataService'];
        function quizService(DataService){

        var service = {
        	quizActive : false,
                resultsActive : false,
        	changeState : changeState,
                correctAnswers: [],
                 markQuiz: markQuiz,
                 numCorrect: 0
        }

        return service;

       function changeState(metric, state){
                if(metric === "quiz"){
                    service.quizActive = state;
                }else if(metric === "results"){
                    service.resultsActive = state;
                }else{
                    return false;
                }
            }
       function markQuiz(){
                service.correctAnswers = DataService.correctAnswers;
                for(var i = 0; i < DataService.quizQuestions.length; i++){
                    if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
                        DataService.quizQuestions[i].correct = true;
                        service.numCorrect++;
                    }else{
                        DataService.quizQuestions[i].correct = false;
                    }
                }
            }


        }
})();