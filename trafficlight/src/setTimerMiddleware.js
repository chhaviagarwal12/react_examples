import {startTimer,stopTimer} from './actions'

export const setTimerMiddleware=store=>{
    let intervalId=null;
    return next=>action=>{
        switch(action.type){
            case 'START_TIMER':
                intervalId=setInterval(()=>{
                    store.dispatch({
                        type:'START_TIMER',
                        payload:action.payload
                    })
                },1000);
                break;
            case 'STOP_TIMER':
                clearInterval(intervalId)
        }
        return next(action)
        
    }

}