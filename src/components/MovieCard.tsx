import Link from "next/link"

const MovieCard = ({movie}:any) => {
  return (
    <div className="card h-100 w-100">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'} alt={movie.Title} height={'100%'} />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{`Yapım Yılı: ${movie.Year}`}</p>
        <p className="card-text">{`IMDB ID: ${movie.imdbID}`}</p>
        <Link href={`/${movie.imdbID}`} className="btn btn-primary">Detaya Git </Link>
      </div>
  </div>
  )
}

export default MovieCard

