import { FilterItem, StateHead } from "@/models/model";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: StateHead = {
  data: [],
  detail: null,
  total: '',
  seasonsData: null,
  filter: [{
    type: 's',
    value: 'pokemon'
  }],
  loading: false,
  error: "",
};
const API_URL = 'https://www.omdbapi.com/?apikey=c8f92f6c'

export const fetchMoviesStates = createAsyncThunk(
  "fetchStates",
  async (params: { filter: FilterItem[] }) => {
    let query: string = '';
    if (params.filter?.length) {
      params.filter.map((x: FilterItem) => {
        if (x.type && !x.value) {
          query += `&${x.type}=pokemon`
        } else {
          query += `&${x.type}=${x.value}`
        }
      });
    }
    const response = await fetch(`${API_URL}${query}`);
    const data = await response?.json();
    const movies = data
    return movies
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "fetchMovieDetails",
  async (params: { id: any, query?: any }) => {
    if (params?.id) {
      const response = await fetch(`${API_URL}&i=${params.id}${params.query ?? ''}`);
      const data = await response?.json();
      return data
    }
  }
);

export const fetchMovieSeasons = createAsyncThunk(
  "fetchMovieSeasons",
  async (params: { query: any }) => {
    if (params?.query) {
      const response = await fetch(`${API_URL}${params.query ?? ''}`);
      const data = await response?.json();
      return data
    }
  }
);
export const moviesStatesSlice = createSlice({
  name: "moviesStates",
  initialState,
  reducers: {
    rFilter: (state, action) => {
      state.filter = [...action.payload]
    },
    rData: (state, action) => {
      state.data = [...action.payload]
    },
    rTotal: (state, action) => {
      state.total = {...action.payload}
    }
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchMoviesStates.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(
      fetchMoviesStates.fulfilled,
      (state: any, action: PayloadAction<[]>) => {
        state.loading = false;
        state.error = "";
        let newArr = [...state.data]
        state.data = [...state.data, ...(action.payload?.Search ?? [])];
        state.total = action.payload.totalResults;
      }
    );
    builder.addCase(fetchMoviesStates.rejected, (state: any) => {
      state.loading = false;
      state.data = [];
      state.error = "Yüklenemedi";
    });
    builder.addCase(fetchMovieDetails.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(
      fetchMovieDetails.fulfilled,
      (state: any, action: PayloadAction<[]>) => {
        state.loading = false;
        state.error = "";
        state.detail = action.payload;
      }
    );
    builder.addCase(fetchMovieDetails.rejected, (state: any) => {
      state.loading = false;
      state.detail = '';
      state.error = "Yüklenemedi";
    });
    builder.addCase(fetchMovieSeasons.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(
      fetchMovieSeasons.fulfilled,
      (state: any, action: PayloadAction<[]>) => {
        state.loading = false;
        state.error = "";
        state.seasonsData = action.payload;
      }
    );
    builder.addCase(fetchMovieSeasons.rejected, (state: any) => {
      state.loading = false;
      state.seasonsData = '';
      state.error = "Yüklenemedi";
    });
  },
});
export const { rFilter, rData, rTotal } = moviesStatesSlice.actions

export default moviesStatesSlice.reducer;
