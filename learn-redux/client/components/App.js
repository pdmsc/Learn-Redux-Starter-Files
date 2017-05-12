//Component created by redux that will inject all the Store and action Creators into the main component
//uses connect method to wrap the Main component and pass all the data and behaviour down, instead of having to pass manually everything all the way down on the props
import { bindActionCreators } from 'redux'; //used in the mapDispatchToProps to bind the ActionCreators to the dispatch method
import { connect } from 'react-redux';// creates our app component, wrapping the component we send. Uses mapState and mapDispatch to props functions
import * as actionCreators from '../actions/actionCreators'; //gets all the action creators function
import Main from './Main';

//basically makes the state available in props this.props.posts to get state.posts
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

//binds dispatch with the action creator, so... we can just call this.props.action to call the creator and dispatch its action
function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

//Main component is decorated with the redux component App that has all the store and action creators embebbed
const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;