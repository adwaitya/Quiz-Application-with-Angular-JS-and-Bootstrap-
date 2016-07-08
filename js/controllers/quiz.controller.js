(function (){
	'use strict';
	angular.module('myBlog')
		   .controller('QuizController',QuizController);

		   QuizController.$inject = ['quizService', 'DataService'];
		   	function QuizController(quizService, DataService){
		   		var vm = this;
		   		vm.title = "Quiz Application Developed By Angular JS";

		   		 vm.quizService = quizService;
				 vm.DataService = DataService;
				 vm.questionAnswered = questionAnswered;
				 vm.setActiveQuestion = setActiveQuestion;
				 vm.selectAnswer = selectAnswer;
				 vm.finaliseAnswers = finaliseAnswers;
				 vm.activeQuestion = 0;
				var numberQuestionAnswered = 0;
				vm.error = false;
				vm.finalise = false;
				function  setActiveQuestion(index) {
					if(index === undefined) {
						var breakOut = false;
						var quizLength = DataService.quizQuestions.length - 1;
						while (!breakOut) {

							vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;

							if (vm.activeQuestion === 0) {
								vm.error = true;
							}
							if (DataService.quizQuestions[vm.activeQuestion].selected === null) {
								breakOut = true;
							}
						}
					}else{

						vm.activeQuestion = index;
					}
				}

				function questionAnswered() {
					var quizLength = DataService.quizQuestions.length;
					if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
						numberQuestionAnswered++;
						if(numberQuestionAnswered >= quizLength){
							for(var i = 0; i < quizLength; i++){

								if(DataService.quizQuestions[i].selected === null){
									setActiveQuestion(i);
									return;
								}
							}
							vm.error =false;
							vm.finalise = true;
							return;
						}
					}
					vm.setActiveQuestion();
				}

				function selectAnswer(index) {
					DataService.quizQuestions[vm.activeQuestion].selected = index;

				}

				function finaliseAnswers(){

					vm.finalise = false;
					numberQuestionAnswered = 0;
					vm.activeQuestion = 0;
					quizService.markQuiz();
					quizService.changeState("quiz", false);
					quizService.changeState("results", true);
				}
				
		   	}
})();