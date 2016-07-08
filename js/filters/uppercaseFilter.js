( function (){

'use strict';

angular.module('myBlog')
	 .filter('makeUppercase', function () {
  return function (item) {
      return item.toUpperCase();
  }
});

})();