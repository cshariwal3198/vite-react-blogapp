import React, { useEffect, useState } from "react";
import { IAllBlogFetch, ISingleBlogObject } from "../../types";
import "./Home.css";
import UseFetchData from "../useFetchData";
import { MoonLoader } from "react-spinners";
import { Link } from "react-router-dom";

function Home() {
  const { data, error, pending } = UseFetchData("http://localhost:4000/blogData") as IAllBlogFetch;

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
        {pending ? (
          <MoonLoader color="#36d7b7" className="home-spinner" />
        ) : (
          data.map((item: ISingleBlogObject) => {
            return (
              <div key={item.id}>
                <Link
                  to={`/singleblog/${item.id}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div className="single-blog-div">
                    <div id="heading">
                      <h6>Subject : {item.heading}</h6>
                      <small>by : {item.authorName}</small>
                      <p>{item.content.slice(0, 200) + "..."}</p>
                    </div>
                    <img src={item.picture} height="100px" width="140px" />
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
