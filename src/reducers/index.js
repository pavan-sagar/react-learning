export const reducer = (state={},action) => {
    console.log((action))
    if(action.type === 'CHANGE_MEMBER'){

        return {...state,username:action.memberName}
    }

    return state;
}

