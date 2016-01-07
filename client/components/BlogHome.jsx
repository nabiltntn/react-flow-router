const {ListGroup, ListGroupItem} = ReactBootstrap

BlogHome = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    let data = {}

    const handle = SubsManagers.POSTS.subscribe('posts')
    if (handle.ready()) {
      data.posts = Posts.find({}).fetch()
    }
    return data;
  },

  getContent() {

    return (
      <ListGroup> {
      this.data.posts.map((post) => {
        return (
          <ListGroupItem key={post._id}>
          <a href={FlowRouter.path("post", {postId : post._id}) }>{post.title}</a><br/>
          </ListGroupItem>
        );
      })
      }
    </ListGroup>
    );

  },

  render() {
    return (
      <div>
        <p>Sample application to implement the basic concepts of React with flow-router<br/>
        and react-layout plugin and subs-manager
        </p>
  
        <h4>Posts list </h4>
        {this.data.posts ? this.getContent() : <Spinner spinnerName='double-bounce' />}
      </div>
    );
  }
});