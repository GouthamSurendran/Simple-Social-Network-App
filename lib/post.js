Post = new Mongo.Collection('post');

Meteor.methods({
    addPost: (content)=>{
        if(!Meteor.user()){
            throw new Meteor.Error('Not-Authorized');
        }
        var username = Meteor.user().username;

        Post.insert({
            content: content,
            created: new Date(),
            username: username
          })
    }
})