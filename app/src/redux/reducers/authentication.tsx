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
    state: 'not authenticated',
    // loading: false
};

const userLoggedSlice = createSlice({
    name: "userLogged",
    initialState,
    reducers: {
        login: (state, action) => {
            // loading: false
            state.user = action.payload.user
            state.state = "authenticated"
            state.token = action.payload.token
        },
        logout: (state) => {
            state.state = "not authenticated"
        },
    },
});

export const { login, logout } = userLoggedSlice.actions;
export default userLoggedSlice.reducer;