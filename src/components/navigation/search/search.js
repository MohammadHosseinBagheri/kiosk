import React, { useState } from "react";
import { connect } from "react-redux";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSuggestion, setIsSuggestion] = useState(false);

  const { products } = props;

  let suggestion = "d-none";

  const filterProducts = products.filter((val) => {
    if (searchTerm == "") {
      suggestion = "d-none";
      return;
    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      suggestion = "d-block";
      return val;
    }
  });

  const filterProductNames = filterProducts.map((val, key) => (
    <li className="filterProductName" key={key}>
      {val.name}
    </li>
  ));

  return (
    <>
      <input
        className={`${
          suggestion === "d-block" && isSuggestion === true ? "search-suggestion-mode" : ""
        } ${props.className} search-text `}
        type="text"
        placeholder="جستجو"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        onBlur={() => setIsSuggestion(false)}
        onFocus={() => setIsSuggestion(true)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        className="bi bi-search icon-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <ul
        className={ `filterProductNames ${
          isSuggestion ? suggestion : "d-none"
        }`}
      >
        {filterProductNames}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({ products: state.allProducts });

export default connect(mapStateToProps)(Search);
