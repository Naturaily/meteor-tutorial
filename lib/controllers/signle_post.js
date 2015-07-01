SinglePostController = BaseController.extend({
  template: 'postPage',

  waitOn: function(){
    return Meteor.subscribe('singlePost', this.params._id);
  },

  data: function() {
    return Posts.findOne(this.params._id);
  }
});
