/// <reference path='../refs.ts'/>

interface JQuery {
    slider(obj: any): any;
    datepicker(obj: any): any;
}

module auction.directive {
    'use strict';

    angular.module("auction").directive("auctionSearchFilter", function () {
        return {
            restrict: "E",
            templateUrl: "views/partial/SearchProducts.html",
            controller: ['$scope', '$location', function($scope, $location) {
                $scope.findnow = function() {
                    $location.path('/search');
                }
            }],
            //Заплата, толком сделать не удаётся
            link: function(scope, element, attrs) {
                angular.element("#price_range").slider({}).on("slide", function(e) {
                    angular.element("#price_LeftBound").val(e.value[0]);
                    angular.element("#price_RightBound").val(e.value[1]);
                });
            }
        }
    });
}