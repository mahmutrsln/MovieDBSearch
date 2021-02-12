import React, { useState } from "react";

export default function SearchMovie() {

    const [query, setQuery] = React.useState('');
    const [moviesdata, setMoviesData] = React.useState([]);


    //const [data, setData] = React.useState();
    const searchMovies = async (e) => {
        e.preventDefault();
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=306b993e3a540003accace53a1ee19a7&language=en-US&page=1&include_adult=false&query=${query}`;
        try {
            if (query != "") {
                const rdata = await fetch(apiUrl);
                const ndata = await rdata.json();
                setMoviesData(ndata.results);
            }
        } catch (err) {
            console.log(err);
        }
        // fetch(apiUrl)
        //     .then(response => response.json())
        //     .then(data => console.log(data.results));
    }

    return (
        <>
            <form onSubmit={searchMovies}>
                <label htmlFor="query">Search</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Film Ara"
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}

                />
                <button className="btn btn-block mt-2 btn-outline-primary" type="submit">Search</button>
            </form>
            <div className="container mt-2">
                <div className="row">
                    {
                        moviesdata.filter(movie => movie.poster_path).map(movie => (
                            <div className="col-md-4" key={movie.id}>
                                <div className="card">
                                    <img height="200" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text">
                                            <small>Release Date : {movie.release_date}</small>
                                        </p>
                                        <p className="card-text">
                                            <small>Rating : {movie.vote_average}</small>
                                        </p>
                                        <p className="card-text">
                                            <small>Description : {movie.overview}</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    );
}