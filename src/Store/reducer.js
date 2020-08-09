import * as actionTypes from './actionTypes';

const initialstate = {
    counter: 0,
    result: []
}

const reducer = (state = initialstate, action) => {
    if (action.type === actionTypes.INCREMENT) {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === actionTypes.DECREMENT) {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === actionTypes.SUBTRACTION) {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    if (action.type === actionTypes.ADD) {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            result: state.result.concat({ val: state.counter, id: new Date() })
        }
    }
    if (action.type === actionTypes.DELETE_RESULT) {

        const newUpdatedArray = state.result.filter(result => result.id !== action.resultEid)

        return {
            ...state,
            result: newUpdatedArray
        }
    }

    return state;
}

export default reducer;