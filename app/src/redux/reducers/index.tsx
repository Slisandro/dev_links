import { combineReducers } from "redux";
import userProfileReducers from "./user-profile-reducers";
import userLoggedReducers from "./authentication";
import linksReducers from "./links-reducers";

const rootReducer = combineReducers({
    userProfile: userProfileReducers,
    userLogged: userLoggedReducers,
    links: linksReducers
});

export default rootReducer;