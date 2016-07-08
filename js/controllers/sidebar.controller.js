(function () {
    'use strict';

    angular.module('myBlog')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$rootScope', 'DataService'];
    function SidebarController($rootScope, DataService) {

        var vm = this;
        vm.title ="Creating Sidebar element using custom directives";
        vm.sidebarItems = null;
        vm.activate = _activate;
        
        _activate();

        function _activate()
        {
            vm.sidebarItems = DataService.getAllBrands();
       
        }

        
    }

})();

