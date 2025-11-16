import { configureStore } from "@reduxjs/toolkit";
import { submissionReducer } from "./reducers/submissionReducer";

function loadState() {
  try {
    const stored = localStorage.getItem("submissions");
    return stored ? { submission: { submissions: JSON.parse(stored) } } : undefined;
  } catch {
    return undefined;
  }
}

function saveState(state: unknown) {
  try {
    const submissions = (state as any).submission.submissions;
    localStorage.setItem("submissions", JSON.stringify(submissions));
  } catch {}
}

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    submission: submissionReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
