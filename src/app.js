import React from 'react';
import ReactDOM from 'react-dom';
 import { Provider } from 'react-redux';
import AppRouter  from './routers/AppRouter';
 import configureStore from './store/configureStore';
 import {addPost, deletePost, editPost, setPosts} from './actions/posts'
 import uuid from 'uuid'
// import { login, logout } from './actions/auth';
// import 'normalize.css/normalize.css';
 import './styles/styles.scss';
// import 'react-dates/lib/css/_datepicker.css';
// import { firebase } from './firebase/firebase';
// import LoadingPage from './components/LoadingPage';



const store = configureStore();

const Jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const myid = 123
  
const post = {
    id: myid,
    title: 'my first blog post',
    body:'whtever'
}

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addPost(post))

const update = {title: 'lala'}

store.dispatch(editPost(myid, update))

store.dispatch(deletePost(myid))

const newpost = {
    id: uuid(),
    title: 'blah',
    body: 'badassssss'
}

store.dispatch(setPosts([newpost]))

ReactDOM.render(Jsx, document.getElementById('app'));

