import React from 'react';
import Movie from './movie'
import ReviewForm from './review-setup'
import StarRating from './StarRating';



//Card Data
export default class Moviepost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [{
                name: "Tron Legacy",
                release: "12/17/2010",
                overview: "Sam (Garrett Hedlund), the son of famous video-game developer Kevin Flynn (Jeff Bridges), has been haunted for a long time by his father's mysterious disappearance. A strange signal draws Sam to Flynn's Arcade, and he is pulled into the same cyberworld in which his father, its creator, has been trapped for 20 years. With fearless warrior Quorra (Olivia Wilde), Kevin and Sam seek to escape from a universe that, while magnificent, is far more advanced and dangerous than Kevin had ever imagined.",
                reviews: [{
                    rating: '5 Stars, Great!',
                    review: 'Fresh air to a classic movie. Loved the original tron and i loved this one. Its a must see for tron lovers!',
                    movie: 'Tron Legacy',
                },
                {
                    rating: '5 Stars, Great!',
                    review: 'Very cool story!',
                    movie: 'Tron Legacy',
                }]
            }, {
                name: "Avatar",
                release: "12/18/2009",
                overview: "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.",
                reviews: [{
                    rating: '5 Stars, Great!',
                    review: 'The CGI in this movie blew me away, great story, great plot and amazing execution.',
                    movie: 'Avatar',
                }],
            }]
        }
        this.addNewReview = this.addNewReview.bind(this)
    }


    //adding a new review
    addNewReview(review) {
        let fakeState = this.state.movies
        for (let i of fakeState) {
            if (i.name === review.movie) {
                i.reviews.push(review)
                this.setState({ movies: [...fakeState] })
            }
        }
    }

    //renders the cards
    render() {
        const moviecard = this.state.movies.map(movie => <Movie {...movie} key={movie.name} />);
        return (
            <div>
                {moviecard} <br></br>
                <ReviewForm onSubmit={this.addNewReview} />
            </div>
        )
    }
}

