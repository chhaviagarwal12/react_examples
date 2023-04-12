import {startTimer,stopTimer} from './actions'

export const setTimerMiddleware=store=>{
    let intervalId=null;
    return next=>action=>{
        switch(action.type){
            case 'START_TIMER':
                intervalId=setInterval(()=>{
                    const timeLeft=action.payload.time
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