import { Meteor } from 'meteor/meteor';
Post = new Mongo.Collection('post');

Meteor.startup(() => {
  // code to run on server at startup
});
