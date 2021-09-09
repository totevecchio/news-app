import { useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";
import Error from "./_error";

const News = ({ news }) => {
  // const [searchQuery, setSearchQuery] = useState("react");
  const [value, setValue] = useState({
    text: "",
  });

  const { text } = value;

  const handleChange = (name) => (e) => {
    // setSearchQuery(e.target.value);
    setValue({ ...value, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Router.push(`/news/?searchTerm=${text}`);
  };

  const searchForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={handleChange("text")}
      />
      <button>Search</button>
    </form>
  );

  return (
    <Layout pageTitle="main">
      <div className="searchbox">{searchForm()}</div>
      <div className="main">
        {news.map((n, i) => (
          <div key={i} className='new'>
            <a href={n.url} target="_blank" rel="noreferrer">
              {n.title}
            </a>
            <p>Author: {n.author}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

News.getInitialProps = async ({ query }) => {
  let news;
  try {
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${
        query.searchTerm || "react"
      }`
    );
    news = await res.json();
    console.log(news);
  } catch (err) {
    console.log("ERROR", err);
    news = [];
  }
  return {
    news: news.hits,
  };
};

export default News;
