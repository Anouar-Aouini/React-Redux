import React from 'react';
import './MovieCard.css'
import {useDispatch} from 'react-redux'
import {Button} from 'react-bootstrap'
import {Delete} from '../../../src/Actions/Actions'
import StarRating from '../Search/StarsRating'
export default function MovieCard({el}) {
    const dispatch = useDispatch()
    const handleDelete=()=>{
        dispatch(Delete(el.id))
    }
    return (
    <div className="App">
        <div className="container">
            <div className="cellphone-container">    
            <div className="movie">
            <div className="menu"><StarRating totalStars={5} starsSelected={el.rating}/></div>
                <div className="movie-img" style={{width: '100%', height: '230px', backgroundImage: `url(${el.imgUrl})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', zIndex: '111 !important', borderTopLeftRadius: '4px', borderTopRightRadius: '4px', WebkitMaskImage: '-webkit-gradient(linear, left top, left bottom, color-stop(0, black), color-stop(0.35, black), color-stop(0.5, black), color-stop(0.65, black), color-stop(0.85, rgba(0, 0, 0, 0.6)), color-stop(1, transparent))', position: 'relative'}} />
                <div className="text-movie-cont">
                <div className="mr-grid">
                    <div className="col1">
                    <h4>{el.movieName}</h4>
                    <ul className="movie-gen">
                        <li>{el.duration}  /</li>
                        <li>{el.type}</li>
                    </ul>
                    </div>
                </div>
                <div className="mr-grid summary-row">
                    <div className="col2">
                    <h5>SUMMARY</h5>
                    </div>
                </div>
                <div className="mr-grid">
                    <div className="col1">
                    <p className="movie-description">{el.description}</p>
                    </div>
                </div>
                <div className="mr-grid actors-row">
                    <div className="col1">
                        <h5>Actors : </h5>
                    <p className="movie-actors">{el.actors}</p>
                    </div>
                    <Button onClick={()=>handleDelete()}>Delete</Button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>);
}
