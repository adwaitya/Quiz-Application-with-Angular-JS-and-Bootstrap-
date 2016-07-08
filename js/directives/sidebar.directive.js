(function () {
    'use strict';

    angular.module('myBlog')
        .directive('mySidebar', mySidebar);

    function mySidebar() {
        var directive = {
            restrict: 'E',
            replace: true,
            controller: 'SidebarController',
            controllerAs: 'sidebar',
            templateUrl: 'templates/directives/sidebar.html'
        };

        return directive;
    }

})();

