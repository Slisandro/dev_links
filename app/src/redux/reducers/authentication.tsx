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
    user: null,
    token: null,
    state: 'not authenticated'
};

const userLoggedSlice = createSlice({
    name: "userLogged",
    initialState,
    reducers: {
        login: (state, action) => {
            localStorage.setItem('dev_links', action.payload.token);
            state.user = action.payload.user
            state.state = "authenticated"
            state.token = action.payload.token
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.state = "not authenticated"
            localStorage.removeItem('dev_links');
        },
    },
});

export const { login, logout } = userLoggedSlice.actions;
export default userLoggedSlice.reducer;