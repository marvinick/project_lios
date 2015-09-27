projectLios.factory('PostsFactory', function PostsFactory() {
  var factory = {};
  factory.posts = [];
  factory.addPost = function() {
    factory.posts.push({ title: factory.postTitle, id: factory.posts.length + 1 });
    factory.postTitle = null;
  };

  return factory;
});