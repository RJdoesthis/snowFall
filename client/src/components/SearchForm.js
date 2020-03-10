import React from "react";
import NavBar from "./Navbar";

function SearchForm(props) {
  return (
    <div>
      <NavBar />

      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Please Enter city or town"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
        </button>
        </div>
      </form>

    </div>
  );
}

export default SearchForm;
