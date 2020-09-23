import { Template } from 'meteor/templating';
Post = new Mongo.Collection('post');

import './main.html';

Template.postList.helpers({
  posts: function(){
    return Post.find();
  }
})

Template.postForm.events({
  'submit form': (event)=>{
    event.preventDefault();
    var content = document.getElementById('content').value;
    console.log(content);
    Post.insert({content: content, created: new Date()})
    event.target.reset();
  }
})