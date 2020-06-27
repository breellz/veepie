import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin} from '../actions/auth'



export const LoginPage = ({startGoogleLogin}) => (
  <div className= "login">
    <div className="login-body">
      <h2>Veepie</h2>
        <p>Tell a story...</p>
      <button className="login-body__button"
      onClick = { startGoogleLogin
      }>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch)=> ({
  startGoogleLogin : ()=>  dispatch(startGoogleLogin()),
})

export default connect(undefined, mapDispatchToProps)(LoginPage);
