import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExampleData = createAsyncThunk(
  'example/fetchExampleData',
  async () => {
    const response = await fetch('/api/example');
    return response.json();
  }
);

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    value: 0,
    status: 'idle',
    data: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExampleData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExampleData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchExampleData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement } = exampleSlice.actions;
export default exampleSlice.reducer;
