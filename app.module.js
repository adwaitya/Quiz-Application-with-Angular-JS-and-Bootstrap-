(function () {

'use strict';

angular
    .module('myBlog', ['ngRoute'])
    .config(config)
    .config(httpProvider)
    .factory('httpErrorResponseInterceptor', ['$q', '$location',
        function($q, $location) {
            return {
                response: function(responseData) {
                    return responseData;
                }, 
                responseError: function error(response) {
                    switch (response.status) {
                        case 401:
                            $location.path('/login');
                            break;
                        case 404:
                            $location.path('/404');
                            break;
                        default:
                            $location.path('/error');
                    }

                    return $q.reject(response);
                }
            };
        }
    ]);

    function config ($routeProvider) {
    $routeProvider.

       when('/',{controller:'MainController',
				templateUrl:'views/home.html'
       })

        .when('/Quiz/App',{controller:'HomeController',
        templateUrl:'views/quiz.app.html'
         })
        .when('/404', {
            templateUrl: 'views/notFound.html'
        })

        .otherwise({
            redirectTo: '/'
        });
}
    function httpProvider($httpProvider) {
        $httpProvider.interceptors.push('httpErrorResponseInterceptor');
    }
})();