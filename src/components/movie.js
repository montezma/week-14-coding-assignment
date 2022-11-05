import React from 'react'; 

export default class Movie extends React.Component {
    render(){
        //setting up cards
        const reviewCard  = this.props.reviews.map(review => <div className="card" style={{backgroundColor: "#1b1b18"}} > <b>User Star Rating:</b> {review.rating} <br></br> <b>User Review:</b>{review.review}</div>)
       //rating for top of card
        const avgRating = () => {
           let total=0; 
           this.props.reviews.map(review => total+=parseInt(review.rating));
           return Math.trunc(total/ this.props.reviews.length) }
        
       
        return(
       //Cards     
            <div className="container text-center" style={{backgroundColor: ""}}>
            <div className="card text-white" style={{backgroundColor: "#1b1b18"}}>
              
            <div className="card-header bg-darkgray text-white"  >
            
           <b>{this.props.name}</b> <br></br>Relaese Date: {this.props.release} <b> <br></br>Average Rating:</b> {avgRating()}<br></br>
            </div>
            
            <div className="card-body btn-light" >  <b>Movie Description</b> <br></br> {this.props.overview}</div>
            {reviewCard} 
            <div className="card-footer">
            </div>
        </div>
        </div>
        )
    } 
};