// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   search: 'pokemon',
//   year: ''
// }

// export const moviesStates = createSlice({
//   name: 'moviesStates',
//   initialState,
//   reducers: {
//     searchMovies: (state, action) => {
//       state.search = action.payload
//     },
//     selectYear: (state, action) => {
//       state.year = action.payload
//     }
//   },
// })
// export const { searchMovies, selectYear} = moviesStates.actions
// export const getSearchValue = (state:any) => state.movieStates.search
// export const getSelectedYear = (state:any) => state.movieStates.year
// export default moviesStates.reducer

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StateHead {
    data: [],
    detail: DetailType | null,
    search: string,
    year: string,
    seasonsData: any,
    type:string,
    filter: FilterItem[],
    loading: boolean,
    error: string,
} 
export interface FilterItem {
    type: string;
    value: string;
  }
export interface DetailType {
    Actors: string;
    Awards: string;
    Country: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string; 
    Poster: string;
    Rated: string;
    Ratings: {Source:string;Value:string}[];
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
    totalSeasons: string;
  }

const initialState: StateHead = {
    data: [],
    detail: null,
    search: '',
    seasonsData: '',
    year: '0',
    type:'',
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
    async (params: {filter: FilterItem[]}) => {
        let query: string = '';
        if (params.filter?.length) {
            params.filter.map((x:FilterItem) => {
                if (x.type && !x.value) {
                    query += `&${x.type}=pokemon`
                } else {
                    query += `&${x.type}=${x.value}`
                }
            });
        }
        const response = await fetch(`${API_URL}${query}`);
        const data = await response?.json();
        const movies = data?.Search
        return movies
    }
);

export const fetchMovieDetails = createAsyncThunk(
    "fetchMovieDetails",
    async (params: {id: any, query?: any}) => {
        if (params?.id) {
            const response = await fetch(`${API_URL}&i=${params.id}${params.query ?? ''}`);
            const data = await response?.json();
            return data
        }
    }
);

export const fetchMovieSeasons = createAsyncThunk(
    "fetchMovieSeasons",
    async (params: {query?: any}) => {
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
        rSearch: (state,action) => {
            state.search = action.payload
        },
        rYear: (state,action) => {
            state.year = action.payload
        },
        rType: (state,action) => {
            state.type = action.payload
        },
        rFilter: (state,action) => {
            state.filter = [...action.payload]
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
                state.data = action.payload;
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
export const { rSearch, rYear, rType, rFilter } = moviesStatesSlice.actions

export default moviesStatesSlice.reducer;
