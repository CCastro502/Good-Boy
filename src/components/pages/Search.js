import React, { Component } from "react";
import Axios from "axios";

class Search extends Component {
    state = {
        breeds: [],
        dog: "",
        images: []
    }

    componentDidMount() {
        this.getDogBreeds();
    }


    getDogBreeds = () => {
        Axios.get("https://dog.ceo/api/breeds/list")
            .then(data => {
                console.log(data.data.message);

                this.setState({
                    breeds: data.data.message
                })
            })
            .catch(err => console.log(err));
    }

    getDogPicture = event => {
        event.preventDefault();
        Axios.get("https://dog.ceo/api/breed/" + this.state.dog + "/images")
        .then(data => {
            this.setState({
                images: data.data.message
            })
        })
        .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };



    render() {
        return (
            <div className="container">
                <h1>Search By Breed!</h1>
                <div className="form-group">
                    <label htmlFor="breed">Breed Name:</label>
                    <input value={this.state.dog} name="dog" onChange={this.handleInputChange} type="text"  list="breeds" className="form-control" placeholder="Type in a dog breed to begin" id="breed"  />
                    <datalist id="breeds">
                        {this.state.breeds.map(result => (<option value={result} key={result} />))}
                    </datalist>
                    <button type="submit" className="btn btn-success" onClick={this.getDogPicture}>Search</button>
                </div>
                {this.state.images.map(result => (<img src={result} key={result} alt="Doggy" />))}
            </div>
        )
    }

}

export default Search;