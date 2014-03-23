/// <reference path='../refs.ts'/>

module auction.controller {
  'use strict';

  import m = auction.model;
  import s = auction.service;

  export interface IPriceBounds extends ng.IScope {
    model: BoundsController;
    lowBound: number;
    highBound: number;
  }

  export class BoundsController {
    private static $inject = ['$scope'];

    constructor(private $scope: IPriceBounds) {
        $scope.lowBound = 1000;
        $scope.highBound = 1500;
      }
  }

  angular.module('auction').controller('RBoundsCtrl', BoundsController);
}
