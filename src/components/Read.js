import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import { Link } from 'react-router-dom';


const Read = (props) => {
  const body = props.post.body
  return(
  <div className="read">
    <div className="read-header">
     <Link className="read-header-link" to="/"><h1>Veepie</h1></Link>
      <h3>Tell a story</h3>
    </div >
    <div className=" read-combined content-container ">
     <h1 className="read-title">{props.post.title}</h1>
     <p>By: {props.post.author} on {moment(props.post.createdAt).format('dddd, MMMM Do YYYY, h:mm a')}</p><br /> 
   <div className="read-body"
   dangerouslySetInnerHTML={{__html:body}}>
   </div>
    <br/><br />
  </div>
  </div>
  )
};


const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});


export default connect(mapStateToProps)(Read);
