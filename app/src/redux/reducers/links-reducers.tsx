import { createSlice } from "@reduxjs/toolkit";
import { TechnologiesLabel } from "../../constants/technologies-constants";

export interface Link {
    url: string;
    type: TechnologiesLabel
}

const initialState: Link[] = [];

const linksSlice = createSlice({
    name: "links",
    initialState,
    reducers: {
        setAddLink: (state, action) => {
            state.push(action.payload);
            state = state
        },
        setRemoveLink: (state, action) => state = state.filter((link) => link.type !== action.payload),
        setEditLink: (state, action) => {
            const { type, url } = action.payload;
            const index = state.findIndex((link) => link.type === type);
            state[index].url = url
            state = state
        }
    },
});

export const {
    setAddLink,
    setRemoveLink,
    setEditLink
} = linksSlice.actions;

export default linksSlice.reducer;