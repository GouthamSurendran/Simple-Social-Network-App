import { Template } from 'meteor/templating';

Template.postList.helpers({
    posts: function(){
      return Post.find({},{sort: {created:-1}});
    }
  })