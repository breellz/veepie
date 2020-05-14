import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter } from '../actions/filters'



const PostlistFilter = (props) => {
    return (
        <div >
            <input
            className="post-form__input postlist-search"
            value={props.filters.text} onChange={(e)=>
                props.dispatch(setTextFilter(e.target.value))} placeholder="Search Post" />
        </div>
    )
}

const mapStateToProps = (state) => ({
    filters: state.filters
})



 export default connect(mapStateToProps)(PostlistFilter)