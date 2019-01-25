import React, { Component } from "react";
import Axios from "axios";

class Discover extends Component {
    state = {
        image: "",
    }

    componentDidMount() {
        this.getDogImage();
    }

    getDogImage = () => {
        Axios.get("https://dog.ceo/api/breeds/image/random")
            .then(data => {
                console.log(data.data.message);
                this.setState({
                    image: data.data.message,
                    likesYou: Math.floor(Math.random() * 10) + 1
                })
            })
            .catch(err => console.log(err));
    }

    doesDogLikeYou = () => {
        console.log(this.state.likesYou);
        this.state.likesYou === 1 ? alert("This dog likes you too"): alert("This Good Boy doesn't want to be your friend");
        this.reset();
    }

    reset = () => {
        this.getDogImage();
    }

    render() {
        return (
            <div className="container">
                <h1>Make New Friends</h1>
                <h2>Hit 'Like' for any dog you want to get to know</h2>
                <img src={this.state.image} key={this.state.image} alt="Good Boy" width="400px" height="400px" />
                <button onClick={this.doesDogLikeYou}>Like</button>
                <button onClick={this.reset}>Dislike</button>
            </div>
        )
    }

}

export default Discover;