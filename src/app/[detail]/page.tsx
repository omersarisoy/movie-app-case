'use client'
import { fetchMoviesStates } from "@/features/moviesStatesSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useEffect } from "react"

const Detail = () => {

  const dispatch = useAppDispatch()
  const {data} = useAppSelector((state) => state.movieStates)
  console.log('data :>> ', data);
  
  useEffect(() => {
    dispatch(fetchMoviesStates('t=pokemon'))
  }, [])


  return (
    <div className="container text-light">
        Detail
    </div>
  )
}
export default Detail