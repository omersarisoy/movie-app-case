'use client'
import MovieList from '@/components/MovieList';
import { fetchMoviesStates } from '@/features/moviesStatesSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';

export default function Home() {
  const {filter} = useAppSelector((state) => state.movieStates)
  const dispatch = useAppDispatch();


  useEffect(() => {
      dispatch(fetchMoviesStates({filter}))
  }, [filter])

  return (
    <div className='row d-flex align-items-scretch justify-content-between  gap-2'>
      <MovieList/>
    </div>
  )
}
