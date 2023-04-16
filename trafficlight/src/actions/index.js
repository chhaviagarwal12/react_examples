
const timerId=null;
export const setColor=(id,color)=>(dispatch)=>{
    dispatch({
       type:'SET_COLOR',
       payload:{'id':id,'color':color}
    })
   }


   export const startTimer=(id,time)=>(dispatch)=>({
         type:'START_TIMER',
         payload:{'id':id,'time':time}
   })

   export const stopTimer=(id)=>({
         type:'STOP_TIMER',
         payload:{'id':id}
   })