import React from 'react'
import MainMenu from './Components/MainMenu'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component{
render(){
  return(
    <div className='container'>
   <MainMenu/>
  </div>
  ) 
}
}
export default App