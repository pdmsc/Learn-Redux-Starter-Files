import React from 'react';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Comments = React.createClass({
    renderComment(comment, i) {
        
        return(
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} className='remove-comment'>&times;</button>
                    
                </p>
            </div>
        )
    },
    handleSubmit(e) {
        e.preventDefault();
        console.log("Form is Submited");
        const postId = this.props.params.postId;
        //const {postId} = this.props.params; this way we get the same post id, creating a variable with that name from the attribute with that name on the params

        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        //calling the action creator function for creating comments with this data
        this.props.addComment(postId, author, comment);
        this.refs.commentsForm.reset();

    },

    render() {
        
        return ( 
            <div className="comment">
                {this.props.postComments.map((comment, i) => this.renderComment(comment,i))}               
                {/* When we need data OUT FROM a dom element... we need a ref*/}
                <form ref="commentsForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input ref="author" type="text" placeholder="author"/>
                    <input ref="comment" type="text" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
            
        )

        
    }


});


export default Comments;