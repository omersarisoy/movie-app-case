'use client'

import { fetchMoviesStates } from "@/features/moviesStatesSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import React, { useEffect, useState } from "react"


const SearchBox = () => {
  const [search, setSearch] = useState('pokemon')
  const dispatch = useAppDispatch()
  const {data} = useAppSelector((state) => state.movieStates)

  useEffect(() => {
    dispatch(fetchMoviesStates(`s=${search}`))
  }, [search])

  return (
    <input 
      className="form-control" 
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchBox