import React from "react";
import {setColor} from './actions'
import {connect} from 'react-redux'



let lightCycle=10000,timerId,lightCycleYellow=5000;
class TrafficLight extends React.Component{

    state={greenLightOn:false, timer:lightCycle/1000}

  componentDidMount(){
      this.startTrafficLightCycle()
      
      const duration=4*(lightCycle+lightCycleYellow)
      setInterval(()=>{
        this.startTrafficLightCycle()
      },duration)
  }
    componentDidUpdate(){
        
        this.setLightColor()
       
      
        // this.setTrafficLight()
        // if(this.state.greenLightOn && this.state.timer === lightCycle/1000){
        //     this.greenLight()
        //     setTimeout(()=>{
        //       this.setState({greenLightOn:false})
        //       this.stopTimer()
        //       this.yellowLight()
        //   },lightCycle) 
        // }  
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
    
    this.changeColorOfTrafficLights(lightCycle,1,'yellow')
    .then(()=>{
        
       return Promise.all([this.changeColorOfTrafficLights(lightCycleYellow,1,'red'),
        this.changeColorOfTrafficLights(lightCycleYellow,2,'green')])
      
         //tf2 will be green
    })
    .then(()=>{
        return this.changeColorOfTrafficLights(lightCycle,2,'yellow')
    })
    .then(()=>{
        return Promise.all([this.changeColorOfTrafficLights(lightCycleYellow,2,'red'),
        this.changeColorOfTrafficLights(lightCycleYellow,3,'green')]) //tf3 will be green
    })
    .then(()=>{
        return this.changeColorOfTrafficLights(lightCycle,3,'yellow')
    })
    .then(()=>{
        return Promise.all([this.changeColorOfTrafficLights(lightCycleYellow,3,'red'),
        this.changeColorOfTrafficLights(lightCycleYellow,4,'green')]) //tf4 will be green
    })
    .then(()=>{
        return this.changeColorOfTrafficLights(lightCycle,4,'yellow')
    })
    .then(()=>{
        return Promise.all([this.changeColorOfTrafficLights(lightCycleYellow,4,'red'),
        this.changeColorOfTrafficLights(lightCycleYellow,1,'green')]) //tf1 will be green
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
      startTimer(){
        timerId=setInterval(()=>{
              this.setState({timer:this.state.timer-1})
          },1000)
        }
      
        stopTimer(){
            clearInterval(timerId)
            this.setState({timer:lightCycle/1000})
        }
        render(){
        return(
        <div>
        <label>Timer</label>
        <input className="input is-primary" type="text" readOnly value={this.state.timer} id={this.props.number}></input>
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
        // console.log(state.setColor)
        return{
            setColorObject:state.setColor
        }
    }
    export default connect(mapStateToProps,{setColor})(TrafficLight)