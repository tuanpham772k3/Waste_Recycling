import { createSlice } from "@reduxjs/toolkit";
import type { Reward } from "./types";

type RewardsState = {
    list: Reward[];
};

const initialState: RewardsState = {
    list: [
        { id: "1", name: "Voucher mua sắm", points: 50 },
        { id: "2", name: "Cây xanh mini", points: 100 },
    ],
};

const rewardsSlice = createSlice({
    name: "rewards",
    initialState,
    reducers: {},
});

export default rewardsSlice.reducer;
