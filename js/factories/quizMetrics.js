/*
 * IIFE to avoid global namespace pollution and keep code safe.
 */
(function(){
'use strict';
    angular
        .module('myBlog')
        .factory('quizMetrics', quizMetrics);

      
        function quizMetrics(){

                var quizObj = {
                    quizActive = false
                   
                };
                return quizObj;

            
         
        }

})();
