import { createSlice } from "@reduxjs/toolkit";

export interface UserProfileState {
    name: string;
    lastname: string;
    email: string;
    image: string;
}

const initialState: UserProfileState = {
    name: "",
    lastname: "",
    email: "",
    image: ""
};

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setLastname: (state, action) => {
            state.lastname = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setImage: (state, action) => {
            state.image = action.payload;
        },
    },
});

export const { setName, setEmail, setLastname, setImage } = userProfileSlice.actions;
export default userProfileSlice.reducer;