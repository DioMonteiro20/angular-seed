'use strict';

angular.module('myApp.demo', ['ngRoute'])

.controller('DemoCtrl', ['$scope', 'DemoService', function($scope, DemoService) {
    
    var ctrl=this;

ctrl.books = [{ 'author': 'Jack', 'title': 'Moi'},
{ 'author': 'John', 'title': 'Mon ami'},
{ 'author': 'Max', 'title': 'L\'autre' }]


    //ctrl.a
    //ou $scope.maVariable = "salut" et .controller('DemoCtrl', ['$scope], [function($scope)
        ctrl.person={};

        $scope.$watch('ctrl.person', function(){
            ctrl.result = DemoService.compute(ctrl.person);
        }, true);

        
}]);