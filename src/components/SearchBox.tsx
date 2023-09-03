'use client'

import { FilterItem, fetchMoviesStates, rFilter, rSearch, rYear } from "@/features/moviesStatesSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import React, { useEffect, useState } from "react"


const SearchBox = () => {
  const dispatch = useAppDispatch()
  const {filter} = useAppSelector((state) => state.movieStates);

  return (
    <input 
      className="form-control" 
      placeholder="Search..."
      value={filter.find((x: FilterItem) =>x.type === 's')?.value ?? ''}
      onChange={(e) => {
        const index = filter.findIndex((x:FilterItem) => x.type === 's');
        if (index > -1) {
          let newFilter = [...filter];
          newFilter.splice(index, 1);
          newFilter.push({type: 's', value: e.target.value})
          dispatch(rFilter([...newFilter]))
        } else {
          dispatch(rFilter([...filter, {type: 's', value: e.target.value}]))
        }
      }}
    />
  )
}

export default SearchBox