import { createSlice } from "@reduxjs/toolkit";
import { TechnologiesId } from "../../constants/technologies-constants";

export interface Link {
    url: string;
    type: TechnologiesId | ""
}

export interface LinksState {
    links: Link[];
    isDirty: boolean;
}

const initialState: LinksState = {
    links: [],
    isDirty: false
};

const linksSlice = createSlice({
    name: "links",
    initialState,
    reducers: {
        setLinksOnLogin: (state, action) => {
            state.isDirty = false;
            state.links = action.payload
        },
        setAddLink: (state, action) => {
            state.isDirty = true;
            state.links.push(action.payload);
            state.links = state.links
        },
        setRemoveLink: (state, action) => {
            state.isDirty = true;
            state.links = state.links.filter((link) => link.type !== action.payload)
        },
        setEditLink: (state, action) => {
            const { type, url } = action.payload;
            state.isDirty = true;
            const index = state.links.findIndex((link) => link.type === type);
            state.links[index].url = url;
            state = state;
        },
        setOrderLinks: (state, action) => {
            state.isDirty = true;
            state.links = action.payload;
        }
    },
});

export const {
    setLinksOnLogin,
    setAddLink,
    setRemoveLink,
    setEditLink,
    setOrderLinks
} = linksSlice.actions;

export default linksSlice.reducer;