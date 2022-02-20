const initial_state={
    user:null
}

const reducer=(state=initial_state, action)=>{
    switch (action.type) {
        case 'SIGNIN':
            return{
                user:{...action.payload}
            }
           
        default:
            return{
                user:null
            }
            break;
    }
}


export default reducer;