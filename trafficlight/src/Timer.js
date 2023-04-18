import React from 'react'

let timeout=null;
class Timer extends React.Component{

startTimer(id,time){
    timeout=setInterval(()=>{
        if(id===1)
            {   
                time-=1
                console.log(time)
                const timer=document.getElementById(1)
                timer.value= time
                   }
               
},1000)
}

stopTimer=(id)=>{
    if(id===1){
        if(timeout){
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