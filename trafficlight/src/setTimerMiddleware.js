

export const setTimerMiddleware=store=>{
    console.log("in reducer middleware",store.getState())
    let intervalId=null;
    return next=>action=>{
        switch(action.type){
            case 'START_TIMER':
                intervalId=setInterval(()=>{
                    console.log("in reducer middleware",action.payload.time)
                    let timeLeft=action.payload.time
                    timeLeft-=1
                    store.dispatch({
                        type:'START_TIMER',
                        payload:{'id':action.payload.id,'time':timeLeft}
                    })
                },1000);
                break;
            case 'STOP_TIMER':
                clearInterval(intervalId)
        }
        return next(action)
        
    }

}