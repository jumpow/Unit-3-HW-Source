/// <reference path='../refs.ts'/>
module auction.directive {
  'use strict';
  function priceSliderDirective() {
    return {
      restrict: 'A',
      link: function($scope, el) {
        el.slider({})
            .on("slide", function(e) {
                //angular.element("#price_LeftBound").val(e.value[0]);
                //angular.element("#price_RightBound").val(e.value[1]);
                //alert(e.value[0]);
                $scope.lowBound = e.value[0];
                $scope.highBound = e.value[1];
            });
      }
    };
  };
  angular.module('auction').directive('auctionPriceSlider', priceSliderDirective);
}
