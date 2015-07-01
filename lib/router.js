Router.configure({
  loadingTemplate: 'spinner',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'root',
  controller: 'MainPageController'
});

Router.route('/new', {
  name: 'newPost',
  controller: 'NewPostController'
});

Router.route('/:_id', {
  name: 'singlePost',
  controller: 'SinglePostController'
});
