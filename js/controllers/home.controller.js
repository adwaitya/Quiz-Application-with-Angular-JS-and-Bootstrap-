(function (){
'use strict';

        angular.module('myBlog')
               .controller('HomeController',HomeController);
         
       HomeController.$inject = [ 'quizService', 'DataService'];

          function HomeController(quizService, DataService){
          /* JSHINT VALIDATE TRue */
          var vm = this;
          vm.title = "Quiz Application Developed By Angular JS";
          vm.quizService = quizService;
          vm.list = DataService.listdata;
          vm.activeDetails = {};
          vm.details = details;
          vm.activateQuiz = activateQuiz;
          vm.search = "";
          
         vm.sidebarItems = null;
         
        
        _activate();

        function _activate()
        {
            vm.sidebarItems = DataService.getAllBrands();
       
        }


          function details(index){
          	vm.activeDetails = index;

          }

          function activateQuiz(){
          	quizService.changeState("quiz", true);
          }
         
   }



})();

