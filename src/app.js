import React from 'react';
import ReactDOM from 'react-dom';
 import { Provider } from 'react-redux';
import AppRouter, { history }  from './routers/AppRouter';
 import configureStore from './store/configureStore';
 import { startSetPosts } from './actions/posts'
 import uuid from 'uuid';
 import { login, logout } from './actions/auth';
// import 'normalize.css/normalize.css';
 import './styles/styles.scss';
// import 'react-dates/lib/css/_datepicker.css';
 import { firebase } from './firebase/firebase';
 import LoadingPage from './components/LoadingPage';



const store = configureStore();

const Jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(Jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=> {
  if(user){
    store.dispatch(login(user.uid))
    store.dispatch(startSetPosts()).then(()=>{
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  }else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})

// const myid = 123
  
// const post1 = {
//     id: uuid(),
//     title: 'my first blog post',
//     body:`Lorem consectetur mollit ut esse deserunt. Lorem ipsum sunt velit consequat deserunt incididunt excepteur amet sit officia magna commodo. Dolor exercitation voluptate est do deserunt ullamco. Est sunt irure in sint aliqua. 
//     Fugiat dolore fugiat non nostrud tempor in. Minim culpa et enim ipsum qui consequat ullamco. Ad incididunt officia nulla aute pariatur nulla ullamco non excepteur ullamco non non magna incididunt.
//     Adipisicing consequat laborum aliquip culpa laboris pariatur officia ad aliqua consectetur. Occaecat do fugiat tempor exercitation ex deserunt do esse mollit. Consectetur laborum adipisicing proident duis pariatur sunt. 
//     Minim esse minim fugiat ea. Ea ut ut veniam nisi.
//     Nostrud culpa ea consectetur proident reprehenderit occaecat nisi sit in qui cupidatat. Cupidatat ullamco ullamco nulla dolor deserunt elit tempor ad occaecat voluptate cillum quis velit non. 
//     Tempor do ad exercitation ullamco. Aliquip ipsum duis nulla eiusmod elit sint velit. Consequat incididunt commodo excepteur anim non elit dolor quis et commodo est cupidatat duis aute. 
//     Eu veniam sunt velit tempor dolore magna eiusmod velit. 
//     Laborum tempor deserunt id magna velit Lorem.
//     Nostrud deserunt dolore labore cupidatat Lorem ullamco aliqua nisi commodo cillum non eiusmod amet. 
//     Nisi ipsum est amet id. Dolor aliquip aute adipisicing irure in nostrud adipisicing cillum ex incididunt minim ut tempor et. 
//     Sit duis ad elit ut nostrud officia incididunt amet commodo. Sint cillum duis minim aute ipsum Lorem exercitation duis. Ut proident reprehenderit elit duis esse sit.
//     Consectetur pariatur quis occaecat elit sit.`,
//     tags: ['help', 'mine','sue']
// }

// const post2 = {
//   id: uuid(),
//   title: 'my second blog post',
//   body:'whtever',
//   tags:['programming', 'js', 'html']
// }

// store.subscribe(()=>{
//     console.log(store.getState())
// })

// store.dispatch(addPost(post1))
// store.dispatch(addPost(post2))









