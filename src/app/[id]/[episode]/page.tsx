'use client'
import MovieDetail from "@/components/MovieDetail"
import { fetchMovieDetails } from "@/features/moviesStatesSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useParams } from "next/navigation"
import { useEffect } from "react"

const DetailEpisode = () => {

  const {episode} = useParams();
  const dispatch = useAppDispatch();
  const {detail} = useAppSelector((state) => state.movieStates)

  useEffect(() => {
    if (episode) {
        dispatch(fetchMovieDetails({id: episode}))
    }
  }, [episode])

  return (
    <div className="container">
      {detail ? (
        <MovieDetail movie={detail} />
      ) : (
        'movie not found'
      )}
      
    </div>
  )
}
export default DetailEpisode