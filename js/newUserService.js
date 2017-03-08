/**
 * Created by beebe on 3/7/2017.
 */
angular.module("internApp").service("newUser",function() {
    var users = [];

    this.CreateUser = function(firstName,tagline,profileImg,bio){
           var user = {
               "firstName": firstName,
               "tagline": tagline,
               "profileImg": profileImg,
               "Bio": bio
           };
           users.push(user);
    };

    this.getUsers = function(){
        return users;
    }
});