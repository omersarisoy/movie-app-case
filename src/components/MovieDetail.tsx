import React from 'react'

function MovieDetail(data: any) {
    const { movie } = data
    return (
        <section className='modal-main text-light'>
            <div className='modal-body'>
                <div className='modal-img'>
                    <img src={movie.Poster} alt='Poster' />
                </div>
            </div>
            <div className='modal-info'>
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
                    <b>Plot:</b> {movie.Plot}
                </p>
            </div>
        </section>
    )
}

export default MovieDetail