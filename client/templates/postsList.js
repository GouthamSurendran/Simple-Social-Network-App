import { Template } from 'meteor/templating';
import { Session } from 'meteor/session'

Template.postList.helpers({
    posts: function(){
      
      var result;
      if(Session.get('username')){
        result = Post.find({username:Session.get('username')},{sort: {created:-1}});
      }
      else {
        result = Post.find({},{sort: {created:-1}});
      }
      return result;
    }
  })

  Template.postList.events({
    'click .follow-link' : function (event){
      event.preventDefault();

      Meteor.call('follow',this);
    }
  })