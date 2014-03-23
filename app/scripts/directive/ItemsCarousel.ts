/// <reference path='../refs.ts'/>

module auction.directive {
    'use strict';

    function auctionItemsCarouselDirective() {
        return {
            scope: true,
            restrict: 'E',
            templateUrl: 'views/partial/ItemsCarousel.html'
        };
    };
    angular.module('auction').directive('auctionItemsCarousel', auctionItemsCarouselDirective);
}