/**
 * Created by beebe on 3/7/2017.
 */
angular.module("internApp", ["ngRoute"]).config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "frontlanding.html"
        })
        .when("/frontLanding", {
            templateUrl : "index.html"
        })
});