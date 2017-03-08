/**
 * Created by beebe on 3/6/2017.
 */
angular.module("internApp").controller("entryPage", function($scope, newUser){

    $scope.newProfile = newUser.CreateUser;
    $scope.users = newUser.getUsers()



});