'use client'
import React, { useEffect, useState } from "react"
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchMoviesStates } from "@/features/moviesStatesSlice";

const MovieList = () => {
  const dispatch = useAppDispatch()
  const {data} = useAppSelector((state) => state.movieStates)
  
  useEffect(() => {
    // dispatch(fetchMoviesStates({search: 'pokemon'}))
  }, [])

  return (
    <div className="row g-5">
      {data?.map((movie:any) => (
        <div key={movie.imdbID} className="col-3">
          <MovieCard movie={movie}/>
        </div>
      ))}
    </div>
  )
}

export default MovieList