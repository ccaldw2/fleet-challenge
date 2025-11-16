import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Submission = Record<string, string>;

export type SubmissionState = {
  submissions: Submission[];
};

const initialState: SubmissionState = {
  submissions: []
};

const submissionSlice = createSlice({
  name: 'submission',
  initialState,
  reducers: {
    addSubmission: (state, action: PayloadAction<Submission>) => {
      state.submissions.push(action.payload);
    },
    clearSubmissions: (state) => {
      state.submissions = [];
    },
  },
});

export const { addSubmission, clearSubmissions } = submissionSlice.actions;

export const submissionReducer = submissionSlice.reducer;
