import "./App.css";
import React, { useState } from "react";

import Addlink from "./Components/AddLink";
import SearchBar from "./Components/Searchbar";
import ListLink from "./Components/ListLink";

function App() {
  const parsedLinks = JSON.parse(localStorage.getItem("links"));
  console.log(parsedLinks);

  const [links, setLinks] = useState(parsedLinks.length > 0 ? parsedLinks : []);
  const [search, setSearch] = useState("");

  const addLinkHandler = (name, url, tags) => {
    let newLink = links.concat([{ name, url, tags }]);
    console.log(newLink);
    setLinks(newLink);
    localStorage.setItem("links", JSON.stringify(newLink));
  };

  const searchHandler = (search) => {
    setSearch(search);
  };

  const filterHandler = (search) => {
    const searchItem = search.toLowerCase();
    console.log("Search item", searchItem);

    return links.filter((link) => {
      return (
        link.name.toLowerCase().includes(searchItem) ||
        link.url.toLowerCase().includes(searchItem) ||
        link.tags
          .map((tag) => {
            return tag.toLowerCase().includes(searchItem);
          })
          .indexOf(true) > -1
      );
    });
  };

  return (
    <>
      <header>
        <h1 className="ps-5 py-3 appTitle">Link App</h1>
      </header>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 text-center pt-5">
              <h2 className="noOfLinks pb-4">
                Number of links: {parsedLinks.length}
              </h2>
              <Addlink addLinkHandler={addLinkHandler} />
            </div>
            <div className="col-lg-7 pt-5">
              <div className="text-center">
                <SearchBar searchHandler={searchHandler} />
              </div>
              <div>
                <ListLink links={filterHandler(search)} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
