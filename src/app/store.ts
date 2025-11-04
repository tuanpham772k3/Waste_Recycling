import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/auth/authSlice";
import wasteReducer from "../features/waste/wasteSlice";
import rewardsReducer from "../features/rewards/rewardsSlice";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    waste: wasteReducer,
    rewards: rewardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
