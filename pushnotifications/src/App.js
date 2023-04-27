import React from 'react';
import firebase from './firebase'

class App extends React.Component{

  componentDidMount(){
    const messaging=firebase.messaging()
    messaging.requestPermission().then
  }
  render(){
    return(
      <div></div>
    )
  }
}