import { createSlice } from "@reduxjs/toolkit";

export interface UserProfileState {
    name: string;
    lastname: string;
    username: string;
    image: string;
    id: string;
    userid: number | null;
    file: File;
}

const initialState: UserProfileState =
    localStorage.getItem("dev_links_profile")
        // @ts-expect-error
        ? JSON.parse(localStorage.getItem("dev_links_profile")) as UserProfileState : ({
            name: "",
            lastname: "",
            username: "",
            image: "",
            id: "",
            userid: null,
            file: new File([], "")
        });

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.lastname = action.payload.lastname
            state.username = action.payload.username
            state.image = action.payload.image
            state.userid = action.payload.userid
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setLastname: (state, action) => {
            state.lastname = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setImage: (state, action) => {
            state.image = action.payload.url;
            state.file = action.payload.file
        },
    },
});

export const {
    setName,
    setUsername,
    setLastname,
    setImage,
    setProfile
} = userProfileSlice.actions;
export default userProfileSlice.reducer;