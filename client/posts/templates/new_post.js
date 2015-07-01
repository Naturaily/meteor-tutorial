AutoForm.hooks({
  submitPostForm: {
    onSuccess: function(operation, post) {
      Router.go('singlePost', post);
    }
  }
});
