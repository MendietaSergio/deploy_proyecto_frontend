
const UserReducer = (state, action) => {
    const {payload, type} = action;
    switch(type) {
        case "SET_USER":
            return {
                ...state,
                user: payload
            }
        case "LOGIN":
            return {
                ...state,
                logged: true
            }
        case "LOG_OUT":
            return {
                ...state,
                logged: false
            }
        default: 
            return null;
    }
};

export default UserReducer;