import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Schedule, ScheduleState, ScheduleAction } from "../types";

const initialState: ScheduleState = {
  schedules: [],
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addSchedule: (state, action: PayloadAction<Schedule>) => {
      state.schedules.push(action.payload);
    },
    removeSchedule: (state, action: PayloadAction<number>) => {
      state.schedules = state.schedules.filter((schedule: Schedule) => schedule.id !== action.payload);
    },
  },
});

export const { addSchedule, removeSchedule } = scheduleSlice.actions;

export default scheduleSlice.reducer;