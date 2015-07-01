Meteor.methods({
  submitPost: function(post) {

    var user = Meteor.user();
    if (!user)
      throw new Meteor.Error(401, 'You need to log in first');

    var additionalParams = {
      author: 'Author',
      createdAt: new Date(),
      userId: user._id
    }

    _.extend(post, additionalParams);
    post._id = Posts.insert(post);

    return post;
  }
});
