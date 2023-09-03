'use client'

import { FilterItem, fetchMoviesStates, rFilter, rSearch, rType, rYear } from "@/features/moviesStatesSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import React, { useEffect, useState } from "react"
import styles from '@/styles/Home.module.scss'


const SelectType = () => {
  const [toggleMovie, setToggleMovie] = useState(false)
  const [toggleSeries, setToggleSeries] = useState(false)
  const dispatch = useAppDispatch();
  const {filter} = useAppSelector((state) => state.movieStates)

  return (
    <div>
      <button 
        className={toggleMovie ? `${styles.activeBtn}`: `${styles.typeBtn}`}
        onClick={() => {
          const index = filter.findIndex((x:FilterItem) => x.type === 'type');
          if (index > -1) {
            let newFilter = [...filter];
            for (let index = 0; index < newFilter.length; index++) {
              newFilter.splice(index, 1);
              dispatch(rFilter([...newFilter]))
            }
          } else {
            dispatch(rFilter([...filter, {type: 'type', value: 'movie'}]))
          }
          setToggleMovie(!toggleMovie)
        }}
      >
        Movie
      </button>
      <button 
        className={toggleSeries ? `${styles.activeBtn}`: `${styles.typeBtn}`}
        onClick={() => {
          const index = filter.findIndex((x:FilterItem) => x.type === 'type');
          if (index > -1) {
            let newFilter = [...filter];
            newFilter.splice(index, 1);
            dispatch(rFilter([...newFilter]))
          } else {
            dispatch(rFilter([...filter, {type: 'type', value: 'series'}]))
          }
          setToggleSeries(!toggleSeries)
        }}
      >
        Series
      </button>

    </div>
  )
}

export default SelectType