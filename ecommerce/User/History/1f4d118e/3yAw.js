import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Navigation from './Components/Navigation'
import Header from './Components/HomePage/Header'
import Footer from './Components/Footer'
class App extends React.Component{
render(){
  return(
    <div className='ui grid'>
      <div className='row'>
      <Header/>
      </div>
      <div className='row'>
      <div className='ui container'>
       <Navigation/> 
      </div>
      </div>
      <div className='row'>
        <Footer/>
      </div>
    </div>
  ) 
}

onBrowserClose(){
  window.addEventListener("unload",()=>{
      window.localStorage.clear()
      })
    
}

// componentWillUnmount(){
//   window.addEventListener("unload",()=>{
//   window.localStorage.clear()
//   })

// }
}
export default App