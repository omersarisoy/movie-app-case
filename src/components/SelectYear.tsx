'use client'
import { FilterItem, fetchMoviesStates, rFilter, rYear } from "@/features/moviesStatesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";

export const generateOptions = (start:any, end:any) => {
  const arr = [];

  for (let i = end; i >= start; i--) {
    arr.push(<option key={i} value={i}>{i}</option>);
  }
  return arr;
};

const SelectYear = () => {

  const dispatch = useAppDispatch()
  const {data} = useAppSelector((state) => state.movieStates)
  const {filter} = useAppSelector((state) => state.movieStates)

  console.log('data :>> ', data);

  // useEffect(() => {
  //   dispatch(fetchMoviesStates())
  // }, [year])



  return (
    <div className="w-25">
      <select
        className='form-select'
        name='year'
        value={filter.find((x: FilterItem) =>x.type === 'y')?.value ?? ''}
        onChange={(e) => {
          if (!e.target.value) {

            const index = filter.findIndex((x:FilterItem) => x.type === 'y');
            if (index > -1) {
              let newFilter = [...filter];
              newFilter.splice(index, 1);
              dispatch(rFilter([...newFilter]))
            }
          } else {
            const index = filter.findIndex((x:FilterItem) => x.type === 'y');
            if (index > -1) {
              let newFilter = [...filter];
              newFilter.splice(index, 1);
              newFilter.push({type: 'y', value: e.target.value})
              dispatch(rFilter([...newFilter]))
            } else {
              dispatch(rFilter([...filter, {type: 'y', value: e.target.value}]))
            }
          }
        }}
      >
        <option value='' >Select Year</option>
        {generateOptions(1960, new Date().getFullYear())}
      </select>
    </div>
  )
}
export default SelectYear