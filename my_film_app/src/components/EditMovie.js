import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
class EditMovie extends React.Component {

 
    state = {
        name: "",
        rating: "", overview: "",
        imageURL: ""

    }


    async componentDidMount() {

        const id = window.location.pathname.replace("/edit/","")
        //console.log(id)
        // const id=this.props.match.params.id;
        // console.log(id)
        // await axios.get(`http://localhost:3002/movies/${id}`)
        const response = await axios.get(`http://localhost:3002/movies/${id}`)
        //console.log(response.data);
        const movie = response.data;
        this.setState({name:movie.name,rating:movie.rating,overview:movie.overview,imageURL:movie.imageURL})
    }





    handleFormSubmit = (e) => {
       
        e.preventDefault();
        // const name=this.state.name;
        // const rating=this.state.rating;
        // const overview=this.state.overview;
        // const imageURL=this.state.imageURL;

        const { name, rating, overview, imageURL } = this.state;
        const id = window.location.pathname.replace("/edit/", "");

        const updatedMovie = {
            name,
            rating,
            overview,
            imageURL
        }
       
        this.props.onEditMovie(id, updatedMovie);
       
    }
    onInputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {


        return (
            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Edit the form to update a movie... " disabled />
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name" onChange={this.onInputChange} value={this.state.name} />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating" onChange={this.onInputChange} value={this.state.rating} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL" onChange={this.onInputChange} value={this.state.imageURL} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview" onChange={this.onInputChange} value={this.state.overview} rows="5"></textarea>
                        </div>
                    </div>
                    <div className="form-group col-md-12 d-flex justify-content-center align-items-center ">
                    <input type="submit" className=" btn btn-success btn-block" style={{marginTop:"10px",marginRight:"10px"}}   value="Edit Movie"></input> 
                    <Link to={"/"} type="button" className="btn btn-md btn-outline-warning"  style={{marginTop:"10px"}}>Geri Dön</Link>
                     
                     </div>
                </form>
            </div>


        );

    }
}

export default EditMovie;
