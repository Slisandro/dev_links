import { combineReducers } from "redux";
import userProfileReducers from "./user-profile-reducers";
import userLoggedReducers from "./authentication";

const rootReducer = combineReducers({
    userProfileReducers,
    userLoggedReducers
});

export default rootReducer;