import {START_TIMER,STOP_TIMER} from 'redux-timer'

export const setColor=(id,color)=>(dispatch)=>{
    dispatch({
       type:'SET_COLOR',
       payload:{'id':id,'color':color}
    })
   }


// export const startTimer=(id,time)=>{
//         return{
//             type:'START_TIMER',
//             payload:{
//                   name:'startTrafficLightTimer',
//                   action:'START_TIMER_ACTION',
//                   'id':id,
//                   interval:time,
//             }
//         }
// }
export const startTimer=(id,time)=>{
      return{
          type:'START_TIMER',
          payload:{
                
                'id':id,
                'time':time,
          }
      }
}

export const stopTimer=(id)=>(dispatch)=>
   dispatch({
         type:'STOP_TIMER',
         payload:{name:"stopTrafficLightTimer"}
   })