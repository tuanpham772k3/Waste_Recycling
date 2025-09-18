import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { WasteItem } from "./types";
import { v4 as uuid } from "uuid";

interface WasteState {
    list: WasteItem[];
}

const initialState: WasteState = {
    list: [],
};

const wasteSlice = createSlice({
    name: "waste",
    initialState,
    reducers: {
        addWaste: (state, action: PayloadAction<{ type: string; weight: number }>) => {
            state.list.push({
                id: uuid(),
                type: action.payload.type,
                weight: action.payload.weight,
            });
        },
        removeWaste: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter((w) => w.id !== action.payload);
        },
    },
});

export const { addWaste, removeWaste } = wasteSlice.actions;
export default wasteSlice.reducer;
