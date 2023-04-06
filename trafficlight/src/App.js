  import React from "react";
  import "./style.css"
  import TrafficLight from "./TrafficLight";
  import 'semantic-ui-css/semantic.min.css';
  import {setColor} from './actions'
  import {connect} from 'react-redux'
  let id=1;
  

  class App extends React.Component{

      state={trafficLightID:1,active:false}
  
  componentDidMount(){
    // const style=window.getComputedStyle(document.documentElement).getPropertyValue('--background-red-light')
  // this.redLight()
    // this.setTrafficLightStatus()
    // this.setActiveTrafficLight(id,true)
    // id += 1
    this.props.setColor(1,'green')
    this.props.setColor(2,'red')
    this.props.setColor(3,'red')
    this.props.setColor(4,'red')
  }

  
  // setActiveTrafficLight(id,activeStatus){
  //  this.setState({
  //   trafficLightID:id,
  //   active:activeStatus
  //  })
  // }
  // setTrafficLightStatus=()=>{ 
  //   setInterval(()=>{
  //     console.log("In Set Interval:", new Date().getSeconds())
  //     if(id<=4){
  //       this.setActiveTrafficLight(id,true)
  //       id+=1
  //     }
  //     else{
  //       id=1
  //       this.setActiveTrafficLight(1,true)
  //     }
  //   },10000)
  // }

  



  componentDidUpdate(){
      
      // const activeTrafficLight=this.setActiveTrafficLight()
      // console.log(activeTrafficLight)
  }

 




    render(){    
  return(
    <div className="ui padded two column grid">
      <div className="row">
        <div className="eight wide column">
        <TrafficLight  number={1} activeStatus={this.state.active} trafficLightID={this.state.trafficLightID}/>
        </div>
        <div className="eight wide column" >
        <TrafficLight  number={2} activeStatus={this.state.active} trafficLightID={this.state.trafficLightID}/>
        </div>
      </div>
      <div className="row">
        <div className="eight wide column" >
        <TrafficLight  number={3} activeStatus={this.state.active} trafficLightID={this.state.trafficLightID} />
      
        </div>
        <div className="eight wide column">
        <TrafficLight  number={4} activeStatus={this.state.active} trafficLightID={this.state.trafficLightID}/>
        </div>
      </div>
    </div>
      )
    }
  }

  export default connect(null,{setColor})(App);
