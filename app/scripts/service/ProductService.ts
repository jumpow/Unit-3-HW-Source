/// <reference path='../refs.ts'/>

module auction.service {
  'use strict';

  import m = auction.model;

  // Could be an overkill in this small app, but in real large-scale apps can be
  // really handy.
  export interface IProductService {
    getById(id: number): ng.IPromise<m.ProductModel>;
    getFeatured(): ng.IPromise<m.ProductModel[]>;
    search(): ng.IPromise<m.ProductModel[]>;
  }

  // Actual implementation of IProductService.
  class ProductService implements IProductService {
    // Specified what dependencies Angular should inject into this service.
    // Constructor parameters must follow in the same order.
    private static $inject = ['$http', '$log', '$q'];

    private static ERROR_MSG_FEATURED =
      "Can't get static JSON file with the list of featured products." +
      "Please, ensure you are runnning application on a web server.";

    private static ERROR_MSG_SEARCH =
      "Can't get static JSON file with the list of found products." +
      "Please, ensure you are runnning application on a web server.";

    private static ERROR_MSG_DETAILS =
          "Can't get static JSON file with the list of products. " +
              "Please, ensure you are running application on a web server";
    // Notice how we use TypeScript's ambient type declarations provided by
    // DefinitelyTyped library.
    constructor(private $http: ng.IHttpService,
                private $log: ng.ILogService,
                private $q: ng.IQService) {}

    //
    getById(id: number): ng.IPromise<m.ProductModel> {
      var product = this.$q.defer<m.ProductModel>();
      this.$http.get('data/products-list.json')
        .success((data) => {
          var products = <m.ProductModel[]>data.items;
            for (var i = 0; i < products.length; i++) {
              if (products[i].id == id) {
                return product.resolve(products[i]);
              }
            }
            return product.reject();
          })
          .error(() => this.$log.error(ProductService.ERROR_MSG_DETAILS));

          return product.promise;
      }
    /**
     * Returns the list of featured products.
     * @returns {IPromise<T>} List of featured products.
     */
    getFeatured(): ng.IPromise<m.ProductModel[]> {
      var products = this.$q.defer<m.ProductModel[]>();

      this.$http.get('data/featured-products.json')
        .success((data) => products.resolve(<m.ProductModel[]>data.items))
        .error(() => this.$log.error(ProductService.ERROR_MSG_FEATURED));

      return products.promise;
    }

    /**
     * Searches for products with specified criteria.
     * @returns {IPromise<T>} List of found products.
     */
      search(): ng.IPromise<m.ProductModel[]> {
      var products = this.$q.defer<m.ProductModel[]>();

      this.$http.get('data/search-results.json')
        .success((data) => products.resolve(<m.ProductModel[]>data.items))
        .error(() => this.$log.error(ProductService.ERROR_MSG_FEATURED));

      return products.promise;
    }
  }

  // Register service in the Angular's DI container.
  angular.module('auction').service('ProductService', ProductService);
}
