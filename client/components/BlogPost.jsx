const {Button} = ReactBootstrap

BlogPost = React.createClass({

    //Could use the param to make subscriptions to publiction
    //using the mongo data mixin
    mixins: [ReactMeteorData],

    getMeteorData() {
        let data = {}
        const postId = this.props.postId
        //Use the subsManger to cache subscriptions
        const handle = SubsManagers.SINGLE_POST.subscribe('single_post', postId)
        if (handle.ready()) {
            data.post = Posts.findOne({
                _id: postId
            });
            //Update SEO
            SeoUtils.updateSeo(data.post.title, data.post.content)
        }
        return data;
    },

    getContent() {
        return (
            <div>
            <h3>{this.data.post.title}</h3>
            <p>{this.data.post.content}</p>
            
            </div>
        );
    },

    render() {
        return (
            
            
            <div>
                <Button href="/" bsStyle="success">Home</Button>
                {this.data.post ? this.getContent() : <Spinner spinnerName='double-bounce' />}
            </div>
            
        )
    }
})