import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCourses,
  addCourse as addCourseApi,
  updateCourse as updateCourseApi,
  deleteCourse as deleteCourseApi,
} from "../../sevices/api";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getCourses();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Gagal mengambil data");
    }
  }
);

export const addCourse = createAsyncThunk(
  "courses/addCourse",
  async (newCourse, { rejectWithValue }) => {
    try {
      const res = await addCourseApi(newCourse);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Gagal menambah data");
    }
  }
);

export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async ({ id, updatedCourse }, { rejectWithValue }) => {
    try {
      const res = await updateCourseApi(id, updatedCourse);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Gagal Edit data");
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/deleteCouse",
  async (id, { rejectWithValue }) => {
    try {
      await deleteCourseApi(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Gagal hapus data");
    }
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // POST
      .addCase(addCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // PUT
      .addCase(updateCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.data.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // DELETE
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((c) => c.id !== action.payload);
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;
