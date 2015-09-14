'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post, Auth) {
    $scope.posts = Post.all;
    $scope.user = Auth.user;

    $scope.post = {url: 'http://'};
   // $scope.signedIn = Auth.signedIn;
    $scope.deletePost = function (post){
        Post.delete(post);
    };
});