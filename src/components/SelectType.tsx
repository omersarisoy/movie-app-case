'use client'
import React, { useState } from "react"
import { rFilter } from "@/features/moviesStatesSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import styles from '@/styles/General.module.scss'
import { FilterItem } from "@/models/model"


const SelectType = () => {
  const [toggleMovie, setToggleMovie] = useState(false)
  const [toggleSeries, setToggleSeries] = useState(false)
  const dispatch = useAppDispatch();
  const {filter} = useAppSelector((state) => state.movieStates)

  const sendType = (value:string) => {
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
        onClick={() => {sendType('movie'), setToggleMovie(!toggleMovie)}}
      >
        Movie
      </button>
      <button 
        className={toggleSeries ? `${styles.activeBtn}`: `${styles.typeBtn}`}
        onClick={() => {sendType('series'), setToggleSeries(!toggleSeries)}}
      >
        Series
      </button>
    </div>
  )
}

export default SelectType