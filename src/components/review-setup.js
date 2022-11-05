import React from 'react';


export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: '',
            review: '',
            movie: '',
        }
        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    //clears the state
    resetForm() {
        this.setState({
            rating: '',
            review: '',
            movie: '',
        });
    }
    //onSubmit is a prop passed down from the parent. 
    submitForm() {
        this.props.onSubmit(this.state);
        this.resetForm();

    }
    //updates the sate as when changed in the form.
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }


    render() {
        return (
            <div className="container text-white text-center">
                <div className="form-group col-md">
                    <label for="inputstate"><b>Movie Name</b></label>
                    <select name="movie" id="inputstate" className="form-control" onChange={this.handleInputChange}>
                        <option defaultValue>Choose...</option>
                        <option>Tron Legacy</option>
                        <option>Avatar</option>
                    </select>
                    <label for="StarRating">Star rating</label>
                    <select name="rating" id="StarRating" className="form-control" onChange={this.handleInputChange}>
                        <option defaultValue>Rating...</option>
                        <option>1 Star, Horrible</option>
                        <option>2 Stars, Bad</option>
                        <option>3 Stars, Neutral</option>
                        <option>4 Stars, Good</option>
                        <option>5 Stars, Great!</option>
                    </select>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Review</label>
                        <textarea name="review" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handleInputChange}></textarea>
                    </div>
                    <button className="btn btn-danger" onClick={this.submitForm}>Submit Review</button>
                </div>
            </div>
        );
    }
}

