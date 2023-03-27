import React, { useEffect, useState } from "react";
import { ISingleBlogObject, IUseFetchReturn } from "../types";
import "./styles/Home.css";
import UseFetchData from "./useFetchData";
import { MoonLoader } from "react-spinners";

function Home() {
  const result: IUseFetchReturn = UseFetchData(
    "http://localhost:4000/blogData"
  );
  const { data, error, pending } = result;

  return (
    <div>
      <div className="search-Blog">
        {" "}
        Explore : <input type="text" placeholder="enter topic" />
        <button>Search</button>
      </div>
      <div className="home-body">
        <h3>
          {" "}
          <u>Suggestions for you</u> :{" "}
        </h3>
        { pending? <MoonLoader color="#36d7b7" className="home-spinner"/> : data.map((item: ISingleBlogObject) => {
          return (
            <div key={item.id} className="single-blog-div">
              <div id="heading">
                <h6>Subject : {item.heading}</h6>
                <small>by : {item.authorName}</small>
                <p>{item.content.slice(0, 200) + "..."}</p>
              </div>
              <img src={item.picture} height="100px" width="140px" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
