

export const setColor=(id,color)=>(dispatch)=>{
    dispatch({
       type:'SET_COLOR',
       payload:{'id':id,'color':color}
    })
   }


   export const startTimer=(id,time)=>(dispatch)=>{
      dispatch({
         type:'START_TIMER',
         payload:{'id':id,'time':time}
      })
   }

   export const stopTimer=(id)=>(dispatch)=>{
      dispatch({
         type:'STOP_TIMER',
         payload:{'id':id}
      })
   }