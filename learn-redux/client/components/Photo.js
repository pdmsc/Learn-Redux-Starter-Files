import React from 'React';
import {Link} from 'react-router';

const Photo = React.createClass({
    
    render() {
        const {post, i, comments} = this.props;//creates a new variable for each of the elements in that object called the same

        return ( 
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img className='grid-photo' src={post.display_src} alt={post.caption}/>
                    </Link> 
                </div>



                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button className="likes">&hearts; {post.likes}</button>
                        <Link to={`/view/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble">
                                    {comments[post.code] ? comments[post.code].length : "0"}
                                </span>
                            </span>

                        </Link>


                    </div>  
                </figcaption>
            </figure>

        )

        
    }


});


export default Photo;