import * as actionTypes from '../Store/actionTypes';

const initialstate = {
       result: []
}

const reducer = (state = initialstate, action) => {
       if (action.type === actionTypes.STORE_RESULT) {
           console.log(Math.floor(Math.random(9) *40))
        return {
            ...state,
            result: state.result.concat({ val: action.result, id: Math.floor(Math.random(9) * Math.random(8) *20) })
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