/// <reference path='../refs.ts'/>

module auction.directive {
  'use strict';

  function auctionItemDetailsDirective() {
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'views/partial/itemDetails.html'
    };
  };
  angular.module('auction').directive('auctionItemDetails', auctionItemDetailsDirective);
}