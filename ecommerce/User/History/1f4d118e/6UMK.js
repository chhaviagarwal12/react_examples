import React from 'react'
import MainMenu from './Components/MainMenu'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component{
render(){
  return(
    <div className='ui divided three column grid'>
      <div className='ui segment row'>
      <div className=' left floated two  wide column'></div>
       <div className='five wide column'></div>
       <div className='right floated eight wide column'>
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