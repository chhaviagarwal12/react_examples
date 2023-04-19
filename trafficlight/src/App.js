  import React from "react";
  import "./style.css"
  import TrafficLight from "./TrafficLight";
  import 'semantic-ui-css/semantic.min.css';
  import {setColor,startTimer} from './actions'
  import {connect} from 'react-redux'
  import {INIT_TIMER_1,INIT_TIMER_2,INIT_TIMER_3,INIT_TIMER_4} from './constants'
 
 
  class App extends React.Component{

  componentDidMount(){
    this.props.setColor(1,'green')
    this.props.setColor(2,'red')
    this.props.setColor(3,'red')
    this.props.setColor(4,'red')
    // this.props.startTimer(1,initTimer1);//start timer for traffic light 1
    // this.props.startTimer(2,initTimer2);
    // this.props.startTimer(3,initTimer3);
    // this.props.startTimer(4,initTimer4);
  }

 

render(){    
  return(
    <div className="ui padded two column grid">
      <div className="row">
        <div className="eight wide column">
      
        <TrafficLight  number={1} />
        </div>
        <div className="eight wide column" >
        
        <TrafficLight  number={2}  />
        </div>
      </div>
      <div className="row">
        <div className="eight wide column" >
        
        <TrafficLight  number={3}   />
      
        </div>
        <div className="eight wide column">
      
        <TrafficLight  number={4}   />
        </div>
      </div>
    </div>
      )
    }
  }

  export default connect(null,{setColor,startTimer})(App);
