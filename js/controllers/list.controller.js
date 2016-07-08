
(function (){
'use strict';

        angular.module('myBlog')
               .controller('ListController',ListController);
         
       ListController.$inject = [ 'quizService', 'DataService'];

          function ListController(quizService, DataService){
          /* JSHINT VALIDATE TRue */
          var vm = this;
          vm.title = "Quiz Application ";
          vm.quizService = quizService;
          vm.list = DataService.listdata;
          vm.activeDetails = {};
          vm.details = details;
          vm.activateQuiz = activateQuiz;
          vm.search = "";
          
         


          function details(index){
          	vm.activeDetails = index;

          }

          function activateQuiz(){
          	quizService.changeState("quiz", true);
          }
         
   }



})();

