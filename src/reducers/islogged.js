const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'sign_in':
            return !state;   
        default:
            return false;
    }
};

export default loggedReducer;