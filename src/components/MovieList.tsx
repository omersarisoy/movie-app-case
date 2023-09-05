'use client'
import React, { useCallback, useEffect, useState } from "react"
import MovieCard from "./MovieCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoviesStates, rFilter } from "@/features/moviesStatesSlice";
import { FilterItem } from "@/models/model";
import styles from '@/styles/General.module.scss'
import { ArrowTop } from "./icon";

const MovieList = () => {
  const [page, setPage] = useState<number>(1);
  const [showButton, setShowButton] = useState(false);
  const {data, total, filter} = useAppSelector((state) => state.movieStates);
  const dispatch = useAppDispatch();

  const fetchDataOnScroll = () => {
    setPage(page+1)
    let newArr = [...filter.filter((x: any) => x.type !== 'page')];
    newArr = [...newArr, {type: 'page', value: page+1}];
      dispatch(fetchMoviesStates({filter: newArr}))
  }
  
  useEffect(() => {
    setPage(1);
  }, [total])

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false) 
    }
    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility)
    }
  })

  const handleScrollToTop = () => {
    window.scrollTo({top:0, behavior: 'smooth'})
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={page * 10} 
        next={() => fetchDataOnScroll()}
        hasMore={parseInt(total) !== data?.length}
        pullDownToRefreshThreshold={50}
        loader={<h4>Loading...</h4>}
      >
        <div className="row g-5" >
        {data && (
          data?.map((movie:any) => (
              <div key={movie.imdbID} className="col-xl-3 col-md-4 col-sm-6 col-xs-12">
                <MovieCard movie={movie}/>
              </div>
            ))
          )}
        </div>
      </InfiniteScroll>
      {showButton && (
        <button onClick={handleScrollToTop} className={styles.scrollBtn}>
          <ArrowTop />
        </button>      
      )}
    </div>
  )
}

export default MovieList