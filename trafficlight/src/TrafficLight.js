import React from "react";
import {setColor} from './actions'
import {connect} from 'react-redux'


class TrafficLight extends React.Component{

    state={greenLightOn:false, timer:lightCycle/1000}

  componentDidMount(){
      this.startTrafficLightCycle()
    this.startTimer()
     
      const duration=4*(lightCycle+lightCycleYellow)
      setInterval(()=>{
        this.startTrafficLightCycle()
      },duration)
  }
    componentDidUpdate(){
        this.setLightColor()
         this.startTimer()
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
        this.stopTimer(1);//stop timer for traffic light 1
        const promise=Promise.all([this.changeColorOfTrafficLights(lightCycleYellow,1,'red'),
        this.changeColorOfTrafficLights(lightCycleYellow,2,'green')])
        this.startTimer(1,initTimer4);
        this.stopTimer(2)
        this.startTimer(2,initTimer1);
        return promise
          })
    .then(()=>{
        const promise=this.changeColorOfTrafficLights(lightCycle,2,'yellow')
        return promise
    })
    .then(()=>{
        this.stopTimer(2)
        const promise=Promise.all([this.changeColorOfTrafficLights(lightCycleYellow,2,'red'),
        this.changeColorOfTrafficLights(lightCycleYellow,3,'green')]) //tf3 will be green
        this.startTimer(2,initTimer4);
        this.stopTimer(3)
        this.startTimer(3,initTimer1);
        return promise
    })
    .then(()=>{
        return this.changeColorOfTrafficLights(lightCycle,3,'yellow')
    })
    .then(()=>{
        this.stopTimer(3)
        const promise=Promise.all([this.changeColorOfTrafficLights(lightCycleYellow,3,'red'),
        this.changeColorOfTrafficLights(lightCycleYellow,4,'green')]) //tf4 will be green
        this.startTimer(3,initTimer4);
        this.stopTimer(4)
        this.startTimer(4,initTimer1);
        return promise
    })
    .then(()=>{
        return this.changeColorOfTrafficLights(lightCycle,4,'yellow')
    })
    .then(()=>{
        this.stopTimer(4)
        const promise=Promise.all([this.changeColorOfTrafficLights(lightCycleYellow,4,'red'),
        this.changeColorOfTrafficLights(lightCycleYellow,1,'green')]) //tf1 will be green
        this.startTimer(4,initTimer4);
        this.stopTimer(1)
        this.startTimer(1,initTimer1);
        return promise
    })
    .catch((error)=>console.log(error))
}    

    
        
            // if(this.props.setTimerObject!==undefined){
            //     this.props.setTimerObject.map((item)=>{
            //         if( item.id===1)
            //         {
            //             const timer=document.getElementById(1)
            //             timer.value= item.time
            //         }
            //         else if( item.id===2)
            //         {
            //             const timer=document.getElementById(2)
            //             timer.value= item.time
            //         }
            //         else if( item.id===3)
            //         {
            //             const timer=document.getElementById(3)
            //             timer.value= item.time
            //         }
            //         else if( item.id===4)
            //         {
            //             const timer=document.getElementById(4)
            //             timer.value= item.time
            //         }
            //     })   
            // }
            
 

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
            setColorObject:state.setColor,
            setTimerObject:state.setTimer
        }
    }
    export default connect(mapStateToProps,{setColor})(TrafficLight)