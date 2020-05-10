import React from 'react';
import { connect } from 'react-redux';
import Comments from './Comments'


const Read = (props) => (
  <div>
    <h1>{props.post.title}</h1>
    <p>By:     . on {props.post.createdAt}</p><br /> 
    <p>{props.post.body}</p><br/><br />
    <Comments />
  </div>
);


const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});


export default connect(mapStateToProps)(Read);
