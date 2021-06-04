import {Data} from '../Components/Data/Data'

const initialState = {
    movies: Data
    };
export default function reducer(state=initialState, action){
        const {type,payLoad}=action;
    switch(type) {
        case 'ADDMOVIE' :
            return {...state,movies:[...state.movies,payLoad],}
        case 'DELETE' :
            return{...state,movies:state.movies.filter((el)=>el.id!==payLoad)}
        case 'SEARCH' :
            return{...state,movies:state.movies.filter((el)=>el.movieName.toLowerCase().includes(payLoad.trim()))}
            default:
        return state;
    }
}