import React, { useState, useRef } from "react";
import { connect } from "react-redux";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSuggestion, setIsSuggestion] = useState(false);

  const input = useRef();

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
    <li
      onClick={() => goToProductPage(val)}
      className="filterProductName"
      key={key}
    >
      {val.name}
    </li>
  ));
  const goToProductPage = (product) => {
    const queryParams = [];
    for (let i in product) {
      if (typeof product[i] === "object") {
        continue;
      }
      queryParams.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(product[i])
      );
    }

    // console.log(props.homeUrl);
    // console.log(props.appUrl);
    // console.log(props.aboutUrl);
    // console.log(props.cartUrl);

    // console.log(props.appUrl.location.pathname);
    // console.log(props.appUrl.location.pathname);
    // console.log(props.appUrl.location.pathname);
    // console.log(props.appUrl.location.pathname);

    console.log(window.location.pathname);

    const queryString = queryParams.join("&");

    if (window.location.pathname === props.appUrl.location.pathname) {
      props.appUrl.history.push({
        pathname: "/app",
        search: "?" + queryString,
      });
    } else if (window.location.pathname === props.cartUrl.location.pathname) {
      props.cartUrl.history.push({
        pathname: "/app",
        search: "?" + queryString,
      });
    } else if (window.location.pathname === props.aboutUrl.location.pathname) {
      props.aboutUrl.history.push({
        pathname: "/app",
        search: "?" + queryString,
      });
    } else if (window.location.pathname === props.homeUrl.location.pathname) {
      props.homeUrl.history.push({
        pathname: "/app",
        search: "?" + queryString,
      });
    }

    // switch (window.location.pathname) {
    //   case props.appUrl.location.pathname:
    //     // console.log(window.location.pathname)
    //     // console.log(props.appUrl.location.pathname)
    //     props.appUrl.history.push({
    //       pathname: "/app",
    //       search: "?" + queryString,
    //     });
    //     break;
    //   case props.cartUrl.location.pathname:
    //     // console.log(window.location.pathname)
    //     // console.log(props.cartUrl.location.pathname)
    //     props.cartUrl.history.push({
    //       pathname: "/app",
    //       search: "?" + queryString,
    //     });
    //     break;
    //   case props.aboutUrl.location.pathname:
    //     // console.log(window.location.pathname)
    //     // console.log(props.aboutUrl.location.pathname)
    //     props.aboutUrl.history.push({
    //       pathname: "/app",
    //       search: "?" + queryString,
    //     });
    //     break;
    //   case props.homeUrl.location.pathname:
    //     // console.log(window.location.pathname)
    //     // console.log(props.homeUrl.location.pathname)
    //     props.homeUrl.history.push({
    //       pathname: "/app",
    //       search: "?" + queryString,
    //     });
    //     break;

    //   default:
    //     break;
    // }

    setIsSuggestion(false);
    setSearchTerm("");
    input.current.value = "";
  };

  const noSuggestion = () => {
    setTimeout(() => {
      setIsSuggestion(false);
    }, 100);
  };
  return (
    <>
      <input
        className={`${
          suggestion === "d-block" && isSuggestion === true
            ? "search-suggestion-mode"
            : ""
        } ${props.className} search-text `}
        type="text"
        placeholder="جستجو"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        onBlur={noSuggestion}
        onFocus={() => setIsSuggestion(true)}
        ref={input}
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
        className={`filterProductNames ${isSuggestion ? suggestion : "d-none"}`}
      >
        {filterProductNames}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.allProducts,
  homeUrl: state.homeUrlParams,
  cartUrl: state.cartUrlParams,
  aboutUrl: state.aboutUrlParams,
  appUrl: state.appUrlParams,
});

export default connect(mapStateToProps)(Search);
