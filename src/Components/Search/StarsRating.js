import React from "react";
import "../MovieCard/MovieCard.css";

const Star = ({ selected = false, onClick = f => f }) => (
    <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

export default class StarRating extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    starsSelected: 0
    };
    this.change = this.change.bind(this);
    }

change(starsSelected) {
    this.setState({ starsSelected });
}

render() {
    const { totalStars } = this.props;
    const { starsSelected } = this.props;
    return (
        <div className="star-rating">
        {[...Array(totalStars)].map((n, i) => (
            <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => this.change(i + 1)}
            />
        ))}
        </div>
    );
    }
}
