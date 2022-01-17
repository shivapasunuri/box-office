import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

const Home = () => {
  const [input, setInput] = useState("");

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=lucifer
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then((resp) =>
      resp.json().then((result) => {
        console.log(result);
      })
    );
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
};

export default Home;
