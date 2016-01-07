Meteor.publish("single_post", function(postId) {
    check(postId, String)
    return Posts.find({
        _id: postId
    });

})

Meteor.publish("posts", function() {
    return Posts.find({});
})