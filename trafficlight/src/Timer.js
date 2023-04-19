import React from 'react'

let timeout=null;
let timer1=null,timer2=null,timer3=null,timer4=null;
class Timer extends React.Component{


componentDidMount(){
    this.passTimerFunctions()
    timer1=document.getElementById(1)
    timer2=document.getElementById(2)
    timer3=document.getElementById(3)
    timer4=document.getElementById(4)
}
passTimerFunctions(){
    this.props.handleStartTimer(this.startTimer)
    this.props.handleStopTimer(this.stopTimer)
}
startTimer(id,time){
    timeout=setInterval(()=>{
        if(id===1)
            {   
                // timer1.value=time
                time-=1
                timer1.value= time
            }
            else if(id===2)
            {   
                // timer2.value=time
                time-=1
                timer2.value= time
            }  
            else if(id===3)
            {   
                // timer3.value=time
                time-=1
                timer3.value= time
            } 
            else if(id===4)
            {   
                // timer4.value=time
                time-=1
                timer4.value= time
            }            
},1000)
}

stopTimer=(id,time)=>{
    if(id===1){
        if(timeout){
            timer1.value=time
            clearInterval(timeout)
        }
    }
    else  if(id===2){
        if(timeout){
        timer2.value=time
        clearInterval(timeout)
        }
    }
        if(id===3){
            if(timeout){
                timer3.value=time
                clearInterval(timeout)
                }
            }
        if(id===4){
            if(timeout){
                timer4.value=time
                clearInterval(timeout)
                    }
        }
    } 


render(){
    return(
        <div>
        <label>Timer</label>
        <input className="input is-primary" type="text" readOnly  id={this.props.number}></input>
        </div>
    )
}
}
export default Timer