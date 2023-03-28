import React from 'react';
import { useParams } from 'react-router-dom';
import './singleBlog.css';
import { CircleLoader } from "react-spinners";
import { ISingleBlogFetch, ISingleBlogObject } from '../../types';
import UseFetchData from '../../../hooks/useFetchData';

function SingleBlog() {

    const blog = useParams()

    const {data, pending, error} = UseFetchData(`http://localhost:4000/blogData/${blog.id}`) as ISingleBlogFetch;

  return (
  <>
  {
    pending ?
    <div className='singleblog-spinner'>
      <CircleLoader color="#36d7b7" />
    </div>
    : <div className='blog-detail'>
    <div className='content-block'>
    <h3>{data.heading}</h3>
     <small>  By : {data.authorName} | Published on : {data.publishedOn}</small> <hr/>
     <p>{data.content}</p>
    </div>
    <div>
     <img src={data.picture} height="300px" width="300px"/>
    </div>
  </div>
  }
  
  </>
  
  )
}

export default SingleBlog