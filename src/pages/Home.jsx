import React, { useState } from "react";
import ActorGrid from "../components/actor/ActorGrid";
import MainPageLayout from "../components/MainPageLayout";
import ShowGrid from "../components/show/ShowGrid";
import { apiGet } from "../misc/config";
import { uselastQuery } from "../misc/customHooks";

const Home = () => {
  const [input, setInput] = uselastQuery();
  const [results, setResults] = useState(null);
  const [searchOptions, setSearchOptions] = useState("shows");

  const isShowsSearch = searchOptions === "shows";

  const onSearch = () => {
    apiGet(`/search/${searchOptions}?q=${input}`).then((result) => {
      setResults(result);
      console.log(result);
    });
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = (ev) => {
    setSearchOptions(ev.target.value);
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    } else if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <label htmlFor="shows-search">
        Shows
        <input
          type="radio"
          name=""
          id="shows-search"
          value="shows"
          checked={isShowsSearch}
          onChange={onRadioChange}
        />
      </label>
      <label htmlFor="actors-search">
        Actors
        <input
          type="radio"
          name=""
          id="actors-search"
          value="people"
          checked={!isShowsSearch}
          onChange={onRadioChange}
        />
      </label>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
