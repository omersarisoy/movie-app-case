'use client'
import MovieDetail from "@/components/MovieDetail"
import { generateOptions } from "@/components/SelectYear"
import { fetchMovieDetails, fetchMovieSeasons } from "@/features/moviesStatesSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Detail = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const {detail, seasonsData} = useAppSelector((state) => state.movieStates)
  const [season, setSeason] = useState("1")
  const router = useRouter()
  const totalSeasons = detail ? parseInt(detail.totalSeasons) : 0;

  useEffect(() => {
    if (id) {
        dispatch(fetchMovieDetails({id}))
    }
  }, [id])

  useEffect(() => {
      if (detail?.Type === 'series') {
        dispatch(fetchMovieSeasons({query: `&i=${id}&season=${season}`}))
      }
  }, [season, detail?.Type])

  return (
    <div className="container">
      {detail ? (
        <section className='text-light'>
          <MovieDetail movie={detail} />
            <div>
            { totalSeasons && totalSeasons > 1  && (
              <div className="d-flex align-items-start justify-content-start flex-column">
                <span>Season</span>
              <select
                className='form-select'
                name='seasons'
                value={season}
                onChange={(e:any) => setSeason(e.target.value)}
              >
                {generateOptions(1, totalSeasons)}
              </select>
              </div>
            )}
            <div className="row g-5 py-5">
              {seasonsData?.Episodes?.map((x:any) => (
                <div key={x.imdbID} className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="card border-danger border-3" style={{minHeight: 300}}>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title"><b>Bölüm:</b> {x.Episode}</h5>
                      <p className="card-text"><b>Bölüm Adı:</b> {x.Title}</p>
                      <p className="card-text"><b>IMDB puanı:</b> {x.imdbRating}</p>
                      <p className="card-text"><b>Yayın Tarihi:</b>{x.Released}</p>
                      <button onClick={() => router.push(`/${detail.imdbID}/${x.imdbID}`)} className="btn btn-primary" style={{width:'100%'}}>Detay</button>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
        </section>
      ) : (
        <h1 className="text-light">Novie not found</h1>
      )}
      
    </div>
  )
}
export default Detail