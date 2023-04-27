  import React from "react";
  import "./style.css"
  import TrafficLight from "./TrafficLight";
  import 'semantic-ui-css/semantic.min.css';
  import {setColor,startTimer} from './actions'
  import {connect} from 'react-redux'
  import {INIT_TIMER_1,INIT_TIMER_2,INIT_TIMER_3,INIT_TIMER_4} from './constants'
  import Timer from './Timer'
 
  let startTimer1,stopTimer1;
  class App extends React.Component{



  componentDidMount(){
    this.props.setColor(1,'green')
    this.props.setColor(2,'red')
    this.props.setColor(3,'red')
    this.props.setColor(4,'red')
    startTimer1(1,INIT_TIMER_1)
    startTimer1(2,INIT_TIMER_2)
    startTimer1(3,INIT_TIMER_3)
    startTimer1(4,INIT_TIMER_4)
   
  }

  handleStartTimer=(func)=>{
   
    startTimer1=func
}

  handleStopTimer=(func)=>{
    
   stopTimer1=func
  
  }

render(){    
  return(
    <div className="ui padded two column grid">
      <div className="row">
        <div className="eight wide column">
        <Timer number={1} handleStartTimer={this.handleStartTimer} handleStopTimer={this.handleStopTimer} />
        <TrafficLight  number={1} startTimer={startTimer1} stopTimer={stopTimer1}/>
        </div>
        <div className="eight wide column" >
        <Timer number={2} handleStartTimer={this.handleStartTimer} handleStopTimer={this.handleStopTimer} />
        <TrafficLight  number={2}  startTimer={startTimer1} stopTimer={stopTimer1}/>
        </div>
      </div>
      <div className="row">
        <div className="eight wide column" >
        <Timer number={3} handleStartTimer={this.handleStartTimer} handleStopTimer={this.handleStopTimer} />
        <TrafficLight  number={3}   startTimer={startTimer1} stopTimer={stopTimer1}/>
        </div>
        <div className="eight wide column">
        <Timer number={4} handleStartTimer={this.handleStartTimer} handleStopTimer={this.handleStopTimer} />
        <TrafficLight  number={4}  startTimer={startTimer1} stopTimer={stopTimer1} />
        </div>
      </div>
    </div>
      )
    }
  }

  export default connect(null,{setColor,startTimer})(App);
