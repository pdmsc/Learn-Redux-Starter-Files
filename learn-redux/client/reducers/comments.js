//A Reducer takes in the ACTION ( what happened) and a copy of current State

function updateComments(state=[], action) {
    //ADD_COMMENT
    switch (action.type) {
        case'ADD_COMMENT':
            //this function is called with just a slice of the state, in this case the comments array for the given postId. So it returns the same slice (all the comments for this post) adding a comment to it
            const postId = action.postId;
            const {comment} = action;
            const {author} = action;

            console.log(action);
            
            return [
                ...state,
                {user: author, text:comment}
            ]
        case'REMOVE_COMMENT':
            //this function is called with just a slice of the state, in this case the comments array for the given postId. So it returns the same slice (all the comments for this post) removing one of the elements
           
            //action has index and postId, returning a new array without the one to be deleted            
            return [
                ...state.slice(0,action.index),
                ...state.slice(action.index+1, )
            ]
        default:
            return state;
    }

}


function comments(state=[], action) {
    if (action.postId != undefined) {
        return {
            //returns the whole state and calls a different function with the slice of state to be updated
            ...state,
            [action.postId] : updateComments(state[action.postId], action)

        }
    } else {
        return state;
    }
    

}


export default comments;