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

  const test = (value:string) => {
    const indexValue = filter.findIndex((x:FilterItem) => x.value === value);
    let newArr = [...filter.filter((x:any) => x.type !== 'type')];
    if (indexValue > -1) {
      dispatch(rFilter([...newArr]));
    } else {
      dispatch(rFilter([...newArr, {type: 'type', value: value}]))
    }
  }

  return (
    <div className="d-flex gap-3">
      <button 
        className={toggleMovie ? `${styles.activeBtn}`: `${styles.typeBtn}`}
        onClick={() => test('movie')}
      >
        Movie
      </button>
      <button 
        className={toggleSeries ? `${styles.activeBtn}`: `${styles.typeBtn}`}
        onClick={() => test('series')}
      >
        Series
      </button>
      {/* {filter.some((x:any) => x.type === 'type' && x.value === 'series') && (
        <button 
          className={toggleSeries ? `${styles.activeBtn}`: `${styles.typeBtn}`}
          onClick={() => (
            dispatch(rFilter([...filter, {type: 'eposide', value: '1'}]))
          )}
        >
          Episode
        </button>
      )} */}
    </div>
  )
}

export default SelectType