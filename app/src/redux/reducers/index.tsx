import { combineReducers } from "redux";
import userProfileReducers from "./user-profile-reducers";

const rootReducer = combineReducers({
    userProfileReducers
});

export default rootReducer;