import React from 'react'
import styles from '@/styles/General.module.scss'

function MovieDetail(data: any) {
    const { movie } = data

    return (
        <section className={`${styles.episodeWrap} row`} >
            <div className='col-lg-5 col-md-12'>
                <img src={movie.Poster} alt='Poster' />
            </div>
            <div className='col-lg-5 col-md-12 p-5'>
                <p>
                    <b>Actors:</b> {movie.Actors}
                </p>
                <p>
                    <b>Genre:</b> {movie.Genre}
                </p>
                <p>
                    <b>Director:</b> {movie.Director}
                </p>
                <p>
                    <b>Released:</b> {movie.Released}
                </p>
                <p>
                    <b>Runtime:</b> {movie.Runtime}
                </p>
                <p>
                    <b>Season:</b> {movie.Season}
                </p>
                <p>
                    <b>Title:</b> {movie.Title}
                </p>
                <p>
                    <b>Writer:</b> {movie.Writer}
                </p>
            </div>
        </section>
    )
}

export default MovieDetail