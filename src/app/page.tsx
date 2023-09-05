'use client'
import MovieList from '@/components/MovieList';
import { fetchMoviesStates, rData, rTotal } from '@/features/moviesStatesSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect, useState } from 'react';

export default function Home() {
  const {filter} = useAppSelector((state) => state.movieStates)
  const dispatch = useAppDispatch();

  useEffect(() => {
      let newArr = filter.filter(x => x.type !== 'page')
      dispatch(rData([]));
      dispatch(rTotal('0'));
      dispatch(fetchMoviesStates({filter: newArr}))
  }, [filter])

  return (
    <div className='row d-flex align-items-scretch justify-content-between gap-2'>
      <MovieList/>
    </div>
  )
}
