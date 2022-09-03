import * as $ from './actions'

const initialState = {
    COUNTER:0,
}

const reducerFunction = (state=initialState, action) => {
    switch(action.type){
        case $.COUNTER_DECRASE: {
            return {
                COUNTER:state.COUNTER-1
            }
        }
        case $.COUNTER_INCRASE: {
            return {
                COUNTER:state.COUNTER+1
            }
        }

        default: return state;
    } 

}

export {reducerFunction}