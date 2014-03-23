/// <reference path='refs.ts'/>

module auction {
  'use strict';

  angular.module('auction', ['ngRoute'])
    .config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/main',
        {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/search', {
          templateUrl: 'views/search.html',
          controller: 'SearchCtrl'
        })
        .when('/productDetails/:id',
        {
          templateUrl: 'views/productDetails.html',
          controller: 'DetailsCtrl',
          resolve: auction.controller.DetailsController.resolve
        })
        .otherwise(
        {
          redirectTo: '/main'
        });
      }]);

//  class PriceBoundsController {
//    static $inject = ['$scope'];

//    constructor($scope) {
//      $scope.lowBound = 1000;
//      $scope.highBound = 1500;
//    }
//  }
//  angular.module('auction').controller('BoundsCtrl', PriceBoundsController);
}