import React from 'react'
import MainMenu from './Components/MainMenu'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component{
render(){
  return(
    <div className='container'>
      <div className='row'>
      <div className='two left wide column'></div>
       <div className='five wide column'></div>
       <div className='eight wide column'>
       <MainMenu/>
       </div>
      </div>
    </div>
   

  //   <div className='ui segment'>
  //  <MainMenu/>
  // </div>
  ) 
}
}
export default App