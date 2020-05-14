import React, { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebase'
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

 
 
const Profile = ({startLogout}) => {
  const [Name, setName] = useState('Anonymous')
  const [Email, setEmail] = useState('')
  const [PhotoUrl, setPhotoUrl] = useState('')
  const [Uid, setUid] = useState('')
  const [EmailVerified, setEmailVerified] = useState(false)

  
 useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      setName(user.displayName);
      setEmail(user.email)
      setPhotoUrl(user.photoURL)
      setUid(user.uid)
       setEmailVerified(user.emailVerified)
      }
   })
 },[]) 

 return(
  <div className=" profile">
  <div className="profile--body">
    <img src={PhotoUrl} alt="profile image"/>
    <h3>Name: {Name}</h3>
    <h4>Email address: {Email}</h4>
    <h4>UId: {Uid}</h4>
    <button 
    className=" profile-button login-body__button"
    onClick = {startLogout}>Log Out</button>
    </div>
  </div>
 )};

const mapDispatchToProps =(dispatch) => ({
  startLogout :()=> dispatch(startLogout())
}) 


export default connect(undefined, mapDispatchToProps)(Profile);
