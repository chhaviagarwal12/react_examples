

export const setColor=(id,color)=>(dispatch)=>{
    dispatch({
       type:'SET_COLOR',
       payload:{'id':id,'color':color}
    })
   }