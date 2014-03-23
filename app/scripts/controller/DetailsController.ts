/// <reference path='../refs.ts'/>

module auction.controller {
    'use strict';

  import m = auction.model;
  import s = auction.service;

  export interface IDetailsScope extends ng.IScope {
        model: DetailsController;
  }

  //export interface IDetailsRouteParams extends ng.route.IRouteParamsService {
  //  id: number;
  //}

  export class DetailsController {
    private static $inject = ['$scope', 'itemDetails'];
     public isSearchFormVisible = false;

      public static resolve = {
      itemDetails: ['$route', 'ProductService', ($route: ng.route.IRouteService,
                                                   productService: s.IProductService) => {
                return productService.getById($route.current.params.id);
      }]
    };

    constructor(private $scope: IDetailsScope,
         public itemDetails: m.ProductModel) {
      this.$scope.model = this;
    }
  }

  angular.module('auction').controller('DetailsCtrl', DetailsController);
}