import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isRunning: true,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    incrementTime: (state) => {
      state.seconds += 1;
      if (state.seconds === 60) {
        state.seconds = 0;
        state.minutes += 1;
      }
      if (state.minutes === 60) {
        state.minutes = 0;
        state.hours += 1;
      }
    },
    toggleRunning: (state) => {
      state.isRunning = !state.isRunning;
    },
    resetTimer: (state) => {
      state.hours = 0;
      state.minutes = 0;
      state.seconds = 0;
      state.isRunning = true;
    },
    stopTimer: (state) => {
      state.hours = 0;
      state.minutes = 0;
      state.seconds = 0;
      state.isRunning = false;
    },
  },
});

export const { incrementTime, toggleRunning, resetTimer, stopTimer } =
  timerSlice.actions;

export default timerSlice.reducer;
