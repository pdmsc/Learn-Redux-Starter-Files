//funtion called that creates the ACTION on an event 


//increment the likes
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
//add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comment
export function removeComment(postId, index) {
    console.log("Removing", postId);
    return {
        type:'REMOVE_COMMENT',
        index,
        postId
    }
}


