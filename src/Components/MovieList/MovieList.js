import MovieCard from "../MovieCard/MovieCard"
import {useSelector} from 'react-redux'

export default function MovieList() {
    const movies = useSelector(state => state.movies)
    return (
    <div className="App">
    {movies.map( (el,key) => <MovieCard key={key} el={el}/>)}
    </div>
);
}