import React from 'react';
import { useParams } from 'react-router-dom';
import './singleBlogDetail.css';
import { CircleLoader } from "react-spinners";
import { ISingleBlogFetch } from '../../types/types';
import UseFetchData from '../../../hooks/useFetchData';

function SingleBlog() {

  const blog = useParams();

  const { data, pending } = UseFetchData(`http://localhost:4000/blogData/${blog.id}`) as ISingleBlogFetch;
  const { heading, authorName, publishedOn, content, picture } = data;
  
  return (
    <>
      {
        pending ? <CircleLoader color="#36d7b7"  className='singleblog-spinner'/>
        : <div className='blog-detail'>

            <div className='content-block'>
              <h3>{heading}</h3>
              <small>  By : {authorName} | Published on : {publishedOn}</small> <hr />
              <p>{content}</p>
            </div>

            <div>
              <img src={picture}/>
            </div>

        </div>
      }
    </>

  );
}

export default SingleBlog;