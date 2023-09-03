'use client'
import React from "react"
import MovieCard from "./MovieCard";
import { useAppSelector } from "@/store/hooks";

const MovieList = () => {
  const {data} = useAppSelector((state) => state.movieStates)

  return (
    <div className="row g-5">
      {data ? (
        data?.map((movie:any) => (
          <div key={movie.imdbID} className="col-3">
            <MovieCard movie={movie}/>
          </div>
        ))
      ): (
        <div className="text-light">
          <h1>There is no result</h1>
        </div>
      )}
    </div>
  )
}

export default MovieList