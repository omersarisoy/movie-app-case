'use client'
import { fetchMoviesStates } from "@/features/moviesStatesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";


const SelectYear = () => {
  const [year, setYear] = useState('')
  const dispatch = useAppDispatch()
  const {data} = useAppSelector((state) => state.movieStates)
  console.log('data :>> ', data);

  useEffect(() => {
    dispatch(fetchMoviesStates(`&y=${year}`))
  }, [year])

  const generateYearOptions = () => {
    const arr = [];
  
    const startYear = 1960;
    const endYear = new Date().getFullYear();
  
    for (let i = endYear; i >= startYear; i--) {
      arr.push(<option key={i} value={i}>{i}</option>);
    }
    return arr;
  };

  return (
    <div className="w-25">
      <select
        className='form-select'
        name='year'
        onChange={(e) => setYear(e.target.value)}
        value={year}
      >
        <option >Select Year</option>
        {generateYearOptions()}
      </select>
    </div>
  )
}
export default SelectYear