/*
 * IIFE to avoid polution of the global namespace.
 */
(function(){
    /*
     * 
     */
    angular
        .module("myBlog")
        .controller("ResultsController", ResultsController);
    
   
    ResultsController.$inject = ['quizService', 'DataService'];

 
    function ResultsController(quizService, DataService){
        var vm = this;
        vm.title ="Result ";
        vm.quizService = quizService;
        vm.DataService = DataService;
        vm.getAnswerClass = getAnswerClass; // named function defined below
        vm.setActiveQuestion = setActiveQuestion; // named function defined below
        vm.reset = reset; // named function defined below
        vm.calculatePerc = calculatePerc; // named function defined below
        vm.activeQuestion = 0;

        
            function calculatePerc(){
           
            return quizService.numCorrect / DataService.quizQuestions.length * 100;
        }

        function setActiveQuestion(index){
           
            vm.activeQuestion = index;
        }

        function getAnswerClass(index){
            
             
            if(index === quizService.correctAnswers[vm.activeQuestion]){
                return "bg-success";
            }else if(index === DataService.quizQuestions[vm.activeQuestion].selected){
                return "bg-danger";
            }
        }

        function reset(){
          
            quizService.changeState("results", false);
            quizService.numCorrect = 0;

            for(var i = 0; i < DataService.quizQuestions.length; i++){
                var data = DataService.quizQuestions[i]; //binding the current question to data to keep code clean

                data.selected = null;
                data.correct = null;
            }
        }
    }

   

})();
