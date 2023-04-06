  import React from "react";
  import "./style.css"

  let timerId;
  class App1 extends React.Component{

    state={timer:10, greenLightOn:false}
  
  componentDidMount(){

    this.setColor("--background-yellow-light","black")
    this.setColor("--background-red-light","red")
    this.setColor("--background-green-light","black")
    this.startTimer()
  }

  setColor(variable,color){
    document.documentElement.style.setProperty(variable,color)
  }

  yellowLight(){
    this.startTimer()
    const myTimeout=setTimeout(()=>{
      // console.log("yellow light started",this.state.timer)
      this.setColor("--background-yellow-light","yellow")
      this.setColor("--background-red-light","black")
      this.setColor("--background-green-light","black")
      this.greenLight()  
  },25000)
  }

  redLight(){
    const myTimeout2=setTimeout(()=>{
      // console.log("red light started",this.state.timer)
      // this.stopTimer()
      this.setColor("--background-yellow-light","black")
      this.setColor("--background-red-light","red")
      this.setColor("--background-green-light","black")
      this.stopTimer()
      // this.trafficLightCycle()
    },30000)
  }

  greenLight(){
    const myTimeout1=setTimeout(()=>{
      console.log("green light started",this.state.timer)
      this.stopTimer()
      this.setColor("--background-yellow-light","black")
      this.setColor("--background-red-light","black")
      this.setColor("--background-green-light",'green')
      this.redLight()
      this.startTimer()
    },5000)
  }

  startTimer=()=>{
  timerId=setInterval(()=>{
  console.log("in start timer",this.state.greenLightOn,this.state.timer) 
  if(this.state.timer===10 && !this.state.greenLightOn){
    this.setColor("--background-yellow-light","black")
    this.setColor("--background-red-light","red")
    this.setColor("--background-green-light","black")
  }
  else if(this.state.timer===5 && !this.state.greenLightOn){
    this.setColor("--background-yellow-light","yellow")
    this.setColor("--background-red-light","black")
    this.setColor("--background-green-light","black")
  }
  else if(this.state.timer===0){
    if(this.state.greenLightOn) {
      this.setState({greenLightOn : false})
    }
    else {
      this.setState({greenLightOn:true}, ()=> {console.log("Update State ",this.state.greenLightOn)})
      // this.setState({timer:this.state.timer+10},()=>{
      //   console.log("Update State",this.state.timer)
      // })
      this.setColor("--background-yellow-light","black")
      this.setColor("--background-red-light","black")
      this.setColor("--background-green-light",'green')
      
    }
   }
  if(this.state.greenLightOn && this.state.timer <= 0){
    this.setState({timer:10})
  } else {
  this.setState(
    {
    timer:this.state.timer-1
  })
}
  },1000)
  }
  stopTimer=()=>{
    console.log("in stop timer")
    clearInterval(timerId);
    this.setState({
      timer:30,
      greenLightOn:true
    })
  }
    render(){    
   return(
    <div>
    <div className="control">
    <label>Timer</label>
    <input className="input is-primary" type="text" readOnly value={this.state.timer}  ></input>
    </div>     
    <div className="trafficlight">
    <div className="protector"></div>
    <div className="protector"></div>
    <div className="protector"></div>
    <div className="red"></div>
    <div className="yellow"></div>
    <div className="green"></div>
    </div>
    </div>
      )
    }
  }

  export default App1;
