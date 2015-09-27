projectLios.controller('PostsCtrl', function PostsCtrl($scope, PostsFactory) {
  $scope.posts = PostsFactory.posts;
  $scope.PostsFactory = PostsFactory;
  $scope.ctrlCourse = "shoot"

  $scope.alert = function(message) {
    alert(message)
  }

});