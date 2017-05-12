//A Reducer takes in the ACTION ( what happened) and a copy of current State
function posts(state=[], action) {
    console.log(state, action);
    return state;
}


export default posts;