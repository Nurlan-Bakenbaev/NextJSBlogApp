import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Post {
  slug: string;
  id: number;
  title: string;
  desc: string;
  img: string;
}

export const fetchData = createAsyncThunk<Post[]>(
  "data/fetchData",
  async () => {
    const response = await fetch("http://localhost:3000/api/allposts");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json() as Promise<Post[]>;
  }
);

interface DataState {
  posts: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: DataState = {
  posts: [],
  status: "idle",
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default dataSlice.reducer;
