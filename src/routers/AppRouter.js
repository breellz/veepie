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

export const history = createHistory()
const AppRouter =()=>(
    <Router history ={history}>
    <div>
        <Nav />
        <Switch>
        <Route path = "/" component = {LoginPage} exact = {true}/>
        <Route path ="/dashboard"  component ={DashboardPage} />
        <Route path ="/create"  component = {AddPost} />
        <Route path ="/edit/:id"  component ={EditPost} />
        <Route path ="/profile"  component ={Profile} />
        <Route path ="/read/:id" component ={Read} />
        <Route component ={NotFoundPage} />
        </Switch>
    </div>
    </Router>
)

export default AppRouter;