import React from "react";
import {setColor} from './actions'
import {connect} from 'react-redux'
import {LIGHT_CYCLE,LIGHT_CYCLE_YELLOW,INIT_TIMER_1,INIT_TIMER_2,INIT_TIMER_3,INIT_TIMER_4} from './constants'
import Timer from './Timer'

let startTimer,stopTimer
class TrafficLight extends React.Component{

    componentDidMount(){
      this.startTrafficLightCycle()
      startTimer(1,INIT_TIMER_1)
      startTimer(2,INIT_TIMER_2)
      startTimer(3,INIT_TIMER_3)
      startTimer(4,INIT_TIMER_4)
      
      const duration=4*(LIGHT_CYCLE+LIGHT_CYCLE_YELLOW)
      setInterval(()=>{
        this.startTrafficLightCycle()
      },duration)
    }
    componentDidUpdate(){
        this.setLightColor()
        //  this.startTimer()
    }

    handleStartTimer=(func)=>{
        console.log(func)
        startTimer=func
    }
    
      handleStopTimer=(func)=>{
        console.log(func)
        stopTimer=func
      }
    changeColorOfTrafficLights=(duration,number,color)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                this.props.setColor(number,color)
                resolve('done')
                // this.setLightColor()   
            },duration)
        })
}

startTrafficLightCycle(){
    this.changeColorOfTrafficLights(LIGHT_CYCLE,1,'yellow')
    .then(()=>{
        stopTimer(1,INIT_TIMER_4);//stop timer for traffic light 1
        const promise=Promise.all([this.changeColorOfTrafficLights(LIGHT_CYCLE_YELLOW,1,'red'),
        this.changeColorOfTrafficLights(LIGHT_CYCLE_YELLOW,2,'green')])
        startTimer(1,INIT_TIMER_4);
        stopTimer(2,INIT_TIMER_1)
        startTimer(2,INIT_TIMER_1);
        return promise
          })
    .then(()=>{
        const promise=this.changeColorOfTrafficLights(LIGHT_CYCLE,2,'yellow')
        return promise
    })
    .then(()=>{
        stopTimer(2,INIT_TIMER_4)
        const promise=Promise.all([this.changeColorOfTrafficLights(LIGHT_CYCLE_YELLOW,2,'red'),
        this.changeColorOfTrafficLights(LIGHT_CYCLE_YELLOW,3,'green')]) //tf3 will be green
        startTimer(2,INIT_TIMER_4);
        stopTimer(3,INIT_TIMER_1)
        startTimer(3,INIT_TIMER_1);
        return promise
    })
    .then(()=>{
        return this.changeColorOfTrafficLights(LIGHT_CYCLE,3,'yellow')
    })
    .then(()=>{
        stopTimer(3,INIT_TIMER_4)
        const promise=Promise.all([this.changeColorOfTrafficLights(LIGHT_CYCLE_YELLOW,3,'red'),
        this.changeColorOfTrafficLights(LIGHT_CYCLE_YELLOW,4,'green')]) //tf4 will be green
        startTimer(3,INIT_TIMER_4);
        stopTimer(4,INIT_TIMER_1)
        startTimer(4,INIT_TIMER_1);
        return promise
    })
    .then(()=>{
        return this.changeColorOfTrafficLights(LIGHT_CYCLE,4,'yellow')
    })
    .then(()=>{
        stopTimer(4,INIT_TIMER_4)
        const promise=Promise.all([this.changeColorOfTrafficLights(LIGHT_CYCLE_YELLOW,4,'red'),
        this.changeColorOfTrafficLights(LIGHT_CYCLE_YELLOW,1,'green')]) //tf1 will be green
        startTimer(4,INIT_TIMER_4);
        stopTimer(1,INIT_TIMER_1)
        startTimer(1,INIT_TIMER_1);
        return promise
    })
    .catch((error)=>console.log(error))
}    

    setLightColor(){
        this.props.setColorObject.map((item)=>{
           
                if(item.id===1){
                    const trafficlight1=document.getElementById("trafficLight1")
                    switch(item.color){
                        case 'red':
                        trafficlight1.childNodes[0].style.background="red" ;
                        trafficlight1.childNodes[1].style.background="black" ;
                        trafficlight1.childNodes[2].style.background="black" ;
                        break;
                        case 'yellow':
                        trafficlight1.childNodes[0].style.background="black" ;
                        trafficlight1.childNodes[1].style.background="yellow" ;
                        trafficlight1.childNodes[2].style.background="black" ;
                        break;
                        case 'green':
                        trafficlight1.childNodes[0].style.background="black" ;
                        trafficlight1.childNodes[1].style.background="black" ;
                        trafficlight1.childNodes[2].style.background="green" ;
                        break; 
                        default:
                        trafficlight1.childNodes[0].style.background="black" ;
                        trafficlight1.childNodes[1].style.background="black" ;
                        trafficlight1.childNodes[2].style.background="black" ;
                        break; 
                    }
                }
                else if(item.id===2){
                   
                    const trafficlight2=document.getElementById("trafficLight2")
                    switch(item.color){
                        case 'red':   
                        trafficlight2.childNodes[0].style.background="red" ;
                        trafficlight2.childNodes[1].style.background="black" ;
                        trafficlight2.childNodes[2].style.background="black" ;
                        break;
                        case 'yellow':
                        trafficlight2.childNodes[0].style.background="black" ;
                        trafficlight2.childNodes[1].style.background="yellow" ;
                        trafficlight2.childNodes[2].style.background="black" ; 
                        break;
                        case 'green':
                        trafficlight2.childNodes[0].style.background="black" ;
                        trafficlight2.childNodes[1].style.background="black" ;
                        trafficlight2.childNodes[2].style.background="green" ;
                        break; 
                        default:
                        trafficlight2.childNodes[0].style.background="black" ;
                        trafficlight2.childNodes[1].style.background="black" ;
                        trafficlight2.childNodes[2].style.background="black" ;
                        break;  
                    }
                }
                else if(item.id===3){
                    const trafficlight3=document.getElementById("trafficLight3")
                    switch(item.color){
                        case 'red':
                        trafficlight3.childNodes[0].style.background="red" ;
                        trafficlight3.childNodes[1].style.background="black" ;
                        trafficlight3.childNodes[2].style.background="black" ;
                        break;
                        case 'yellow':
                        trafficlight3.childNodes[0].style.background="black" ;
                        trafficlight3.childNodes[1].style.background="yellow" ;
                        trafficlight3.childNodes[2].style.background="black" ; 
                        break;
                        case 'green':
                        trafficlight3.childNodes[0].style.background="black" ;
                        trafficlight3.childNodes[1].style.background="black" ;
                        trafficlight3.childNodes[2].style.background="green" ; 
                        break;
                        default:
                        trafficlight3.childNodes[0].style.background="black" ;
                        trafficlight3.childNodes[1].style.background="black" ;
                        trafficlight3.childNodes[2].style.background="black" ;
                        break;    
                    }
                }
                else if(item.id===4){
                    const trafficlight4=document.getElementById("trafficLight4")
                    switch(item.color){
                        case 'red':
                        trafficlight4.childNodes[0].style.background="red" ;
                        trafficlight4.childNodes[1].style.background="black" ;
                        trafficlight4.childNodes[2].style.background="black" ;
                        break;
                        case 'yellow':
                        trafficlight4.childNodes[0].style.background="black" ;
                        trafficlight4.childNodes[1].style.background="yellow" ;
                        trafficlight4.childNodes[2].style.background="black" ;
                        break; 
                        case 'green':
                        trafficlight4.childNodes[0].style.background="black" ;
                        trafficlight4.childNodes[1].style.background="black" ;
                        trafficlight4.childNodes[2].style.background="green" ; 
                        break;
                        default:
                        trafficlight4.childNodes[0].style.background="black" ;
                        trafficlight4.childNodes[1].style.background="black" ;
                        trafficlight4.childNodes[2].style.background="black" ;
                        break;  
                    }
                }   
            
        })
       
    }

        render(){
        return(
        <div>
       <Timer number={this.props.number} handleStartTimer={this.handleStartTimer} handleStopTimer={this.handleStopTimer} />
        <div className="trafficlight" id={`trafficLight${this.props.number}`} >
        <div className="red"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        </div>
        </div>
            )
        }
    }

    const mapStateToProps=(state)=>{
    // console.log(state.setTimer)
        return{
            setColorObject:state.setColor
           
        }
    }
    export default connect(mapStateToProps,{setColor})(TrafficLight)