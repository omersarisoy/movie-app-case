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
  const [showEposide, setShowEposide] = useState(false)
  const router = useRouter()


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

  const totalSeasons = detail ? parseInt(detail.totalSeasons) : 0;



  return (
    <div className="container">
      {detail ? (
        <section className='text-light'>
          <MovieDetail movie={detail} />
            <div>
            { totalSeasons && totalSeasons > 1  ? (
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
            ) : (
              'no movie detail'
            )
            }
            <div className="row g-5 py-5">
              {seasonsData?.Episodes?.map((x:any) => (
                <div key={x.imdbID} className="col-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Bölüm: {x.Episode}</h5>
                      <p className="card-text">Bölüm Adı: {x.Title}</p>
                      <p className="card-text">IMDB puanı: {x.imdbRating}</p>
                      <p className="card-text">Yayınlandı:{x.Released}</p>
                      <button onClick={() => router.push(`/${detail.imdbID}/${x.imdbID}`)} className="btn btn-primary">Detay</button>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
        </section>
      ) : (
        'movie not found'
      )}
    </div>
  )
}
export default Detail