import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
};

// Redux contains Actions, Reducer and State
// Actions => Reducer => State than pass to UI
const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) =>{
            state.movies = action.payload;
        }
    }
});

export const{ setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;