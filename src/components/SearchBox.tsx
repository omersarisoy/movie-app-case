'use client'
import React, { useState } from "react"
import { rFilter } from "@/features/moviesStatesSlice"
import { FilterItem } from "@/models/model"
import { useAppDispatch, useAppSelector } from "@/store/hooks"


const SearchBox = () => {
  const dispatch = useAppDispatch()
  const {filter} = useAppSelector((state) => state.movieStates);
  const [search, setSearch] = useState('pokemon')

  return (
    <input 
      className="form-control" 
      placeholder="Search..."
      value={search ?? filter.find((x: FilterItem) =>x.type === 's')?.value}
      onChange={(e) => {
        setSearch(e.target.value)
      }}
      onKeyDown={(e) => {
        if(e.key === 'Enter'){
          const index = filter.findIndex((x:FilterItem) => x.type === 's');
          if (index > -1) {
            let newFilter = [...filter];
            newFilter.splice(index, 1);
            dispatch(rFilter([...newFilter, {type: 's', value: search}]))
          } else {
            dispatch(rFilter([...filter, {type: 's', value: search}]))
          }
        }
      }}
    />
  )
}

export default SearchBox