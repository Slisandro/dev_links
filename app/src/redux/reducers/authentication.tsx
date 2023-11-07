import { createSlice } from "@reduxjs/toolkit";

export interface UserLogged {
    user: {
        id: number
        email: string
    } | null
    token: string | null;
    state: 'authenticated' | 'not authenticated',
    // loading: boolean
}

const initialState: UserLogged = {
    // @ts-expect-error
    user: localStorage.getItem("dev_links_user") ? JSON.parse(localStorage.getItem("dev_links_user")) : null,
    token: localStorage.getItem("dev_links") ?? null,
    state: localStorage.getItem("dev_links") ? 'authenticated' : 'not authenticated'
};

const userLoggedSlice = createSlice({
    name: "userLogged",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
            state.state = "authenticated"
            state.token = action.payload.token
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.state = "not authenticated"
            localStorage.removeItem('dev_links');
            localStorage.removeItem('dev_links_user');
            localStorage.removeItem('dev_links_profile');
            localStorage.removeItem('dev_links_links');
        },
    },
});

export const { login, logout } = userLoggedSlice.actions;
export default userLoggedSlice.reducer;