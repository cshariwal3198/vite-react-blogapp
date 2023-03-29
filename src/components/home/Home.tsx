import React, { useEffect, useState } from "react";
import { IAllBlogFetch, ISingleBlogObject } from "../../types/types";
import "./Home.css";
import useFetchData from "../../../hooks/useFetchData";
import SearchBlockInHome from "./search-blog/searchBlockInHome";
import { MoonLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function Home() {
  const { data, pending } = useFetchData("http://localhost:4000/blogData") as IAllBlogFetch;

  return (
    <div>
      <SearchBlockInHome />

      <div className="home-body">
        <h3> <u>Suggestions for you</u> :  </h3>
        {
          pending ? (<MoonLoader color="#36d7b7" className="home-spinner" />)
            : (data.map((item: ISingleBlogObject) => {
              return <div key={item.id}>
                <GetBlogBlock {...item} />
              </div>;
            })
          )}
      </div>

    </div>
  );
}

export function GetBlogBlock(item: ISingleBlogObject) {

  const { id, heading, authorName, content, picture } = item;

  return <>
    <Link to={`/singleblog/${id}`} style={{ color: "black", textDecoration: "none" }}>
      <div className="single-blog-div">

        <div id="heading">
          <h6> {'->'} {heading}</h6>
          <small>by : {authorName}</small>
          <p>{content.slice(0, 100) + "..."}</p>
        </div>

        <img src={picture} height="100px" width="120px" />

      </div>
    </Link>
  </>;
}