export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_USER:
            if (action.payload._id) {
                return action.payload;
            }
            return false;
        default:
            return state;
    }
}
