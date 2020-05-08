import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from '../components/LoginPage'
import AddPost from '../components/AddPost'
import DashboardPage from '../components/DashBoardPage'
import EditPost from '../components/Editpost'
import Profile from '../components/Profile'
import Read from '../components/Read'
import NotFoundPage from '../components/NotFoundPage'
import Nav from '../components/Nav'


const AppRouter =()=>(
    <BrowserRouter>
    <div>
        <Nav />
        <Switch>
        <Route path = "/" component = {DashboardPage} exact = {true}/>
        <Route path ="/login"  component ={LoginPage} />
        <Route path ="/create"  component = {AddPost} />
        <Route path ="/edit/"  component ={EditPost} />
        <Route path ="/profile"  component ={Profile} />
        <Route path ="/read/" component ={Read} />
        <Route component ={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;