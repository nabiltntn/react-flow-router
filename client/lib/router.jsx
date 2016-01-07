//Define flow routes

//Define a route with id FlowRouter , action is the real code to execute
//No controllers

FlowRouter.route('/', {
    name : 'home',
    action: function(params, queryParams) {
        console.log('Displaying the blog home page')
        //Using the React Layout render using the defined layout
        //and the name of the prop to be used and the components to use
        ReactLayout.render(MainLayout, {content: <BlogHome />});
    }
});

FlowRouter.route('/:postId', {
    name : 'post',
    action: function(params) {
        //Params are Path variables
        //queryParams are query Params
        console.log(`Yeah! We are on the post : ${params.postId}`)
        ReactLayout.render(MainLayout, {content: <BlogPost {...params} />});
    }
});