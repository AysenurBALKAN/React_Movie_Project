import React from "react";
import {Link} from 'react-router-dom';
class SearchBar extends React.Component {


    handleFormSubmit = (event) => {
        event.preventDefault();
    }
    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="row mb-5" style={{marginTop:"20px"}}>
                    <div className="col-md-10">
                        <input onChange={this.props.searchMovieProp} type="text" className="form-control" placeholder="Search..."></input>
                    </div>
                    <div className="col-md-2">
                        <Link to="/add" type="button" className="btn btn-md btn-danger" style={{float:"right"}}>Add Movie</Link>
                    </div>
                </div>
            </form>


        );

    }
}

export default SearchBar;