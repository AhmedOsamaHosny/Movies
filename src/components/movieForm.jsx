import React from "react";
const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form for Movie with ID: {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
