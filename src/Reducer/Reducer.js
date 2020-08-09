const initialState = {
    userDetails: []

}
const Reducer = (state = initialState, action) => {
    if (action.type === "STORE_DETAILS") {
        return {
            ...state,
            userDetails: state.userDetails.concat({ name: action.name, age: action.age, id: new Date() })
        }
    }
    return state;

    // const newUpdatedArray = state.result.filter(result => result.id !== action.resultEid)

    // return {
    //     ...state,
    //     result: newUpdatedArray
    // }

}

export default Reducer;