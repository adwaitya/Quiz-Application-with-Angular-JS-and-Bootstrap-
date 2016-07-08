
(function (){
    'use strict';

    angular.module('myBlog')
        .controller('MainController',MainController);

    MainController.$inject = [ 'quizService', 'DataService', '$scope', '$http'];

    function MainController(quizService, DataService, $scope){
        /* JSHINT VALIDATE TRue */
        var vm = this;
        vm.title = "Welcome to My Blog ";

        /*Explain for code how to work watch function in angular js */
        vm.name = "my blog";
        vm.message = '';
        vm.testName ='Test';
        $scope.$watch('main.name', function (newValue, oldValue) {

                //console.log('newValue :', newValue, 'oldValue: ',oldValue);
                if(newValue == vm.testName){
                    vm.message = 'Hello welcome back';
                }else {
                    vm.message ='';
                }
        });
    }



})();

