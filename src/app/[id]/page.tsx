'use client'
import { generateOptions } from "@/components/SelectYear"
import { fetchMovieDetails, fetchMovieSeasons } from "@/features/moviesStatesSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Detail = () => {

  const [season, setSeason] = useState("1")
  const {id} = useParams();

  const dispatch = useAppDispatch();
  const {detail, seasonsData} = useAppSelector((state) => state.movieStates)


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
        <section className='modal-main text-light'>
          <div className='modal-body'>
            <div className='modal-img'>
              <img src={detail.Poster} alt='Poster' />
            </div>
          </div>
          <div className='modal-info'>
            <p>
              <b>Actors:</b> {detail.Actors}
            </p>
            <p>
              <b>Genre:</b> {detail.Genre}
            </p>
            <p>
              <b>Director:</b> {detail.Director}
            </p>
            <p>
              <b>Released:</b> {detail.Released}
            </p>
            <p>
              <b>Plot:</b> {detail.Plot}
            </p>
          </div>
          <div>
            Episodes
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
              'test'
            )

            }
            <div>{console.log('seasonData :>> ', seasonsData)}</div>
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