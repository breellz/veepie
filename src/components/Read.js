import React from 'react';
import { connect } from 'react-redux';
import Comments from './Comments'


const Read = (props) => {
  const body = props.post.body
  return(
  <div>
    <h1>{props.post.title}</h1>
    <p>By:     . on {props.post.createdAt}</p><br /> 
    <div dangerouslySetInnerHTML={{__html:body}}></div>
    <br/><br />
    <Comments />
  </div>
  )
};


const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});


export default connect(mapStateToProps)(Read);
