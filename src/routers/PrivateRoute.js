import React from 'react';
import { connect } from 'react-redux'
import { Route,Redirect } from 'react-router-dom';
import Nav from '../components/Nav'

export const PrivateRoute = ({
    isAuthenticated, 
    component:Component,
    ...rest
}) => (
    <Route {...rest} component={(props)=>(
        isAuthenticated ? (
            <div>
            <Nav />
            <Component {...props}/>
            </div>
        ):(
            <Redirect to="/" />
        )
    )}/>
)

const mapStateToProps =  (state) => ({
    isAuthenticated : !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)