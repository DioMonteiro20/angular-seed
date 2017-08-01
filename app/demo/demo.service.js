'use strict';

angular.module('myApp.demo')

.service('DemoService', ['$filter', function($filter) {
    
    this.compute= function(person)
    {
        return person.firstname +' '+ person.lastname+' '+
        ' ' + $filter('yearToMonth')(person.age) +
        (person.age> 10 ? 'grand':'petit');
    }
}]);
