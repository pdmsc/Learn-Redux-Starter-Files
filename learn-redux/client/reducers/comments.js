//A Reducer takes in the ACTION ( what happened) and a copy of current State
function comments(state=[], action) {
    console.log("COMMENTS REDUCER",state, action);
    return state;
}


export default comments;