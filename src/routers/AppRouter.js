import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import LoginPage from '../components/LoginPage'
import AddPost from '../components/AddPost'
import DashboardPage from '../components/DashboardPage'
import EditPost from '../components/EditPost'
import Profile from '../components/Profile'
import Read from '../components/Read'
import NotFoundPage from '../components/NotFoundPage'
import Nav from '../components/Nav'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()


const AppRouter =()=>(
    <Router history ={history}>
    <div>
        <Switch>
        <PublicRoute path = "/" component = {LoginPage} exact = {true}/>
        <PrivateRoute path ="/dashboard"  component ={DashboardPage} />
        <PrivateRoute path ="/create"  component = {AddPost} />
        <PrivateRoute path ="/edit/:id"  component ={EditPost} />
        <PrivateRoute path ="/profile"  component ={Profile} />
        <Route path ="/read/:id" component ={Read} />
        <Route component ={NotFoundPage} />
        </Switch>
    </div>
    </Router>
)

export default AppRouter;