import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    //this comes from the URL  
    const { postId } = this.props.params;

    //Search the post index using postId in the posts array
    const i = this.props.posts.findIndex((post) => post.code === postId);
    //gets the actual post
    const post = this.props.posts[i];

    //gets the comments for the post
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments {...this.props} postComments={postComments} />
      </div>
    )
  }
});

export default Single;
