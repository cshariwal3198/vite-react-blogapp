import React, { useState, useEffect } from 'react';
import './showlist.css';
import { useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import useFetchData from '../../../hooks/useFetchData';
import { IAllBlogFetch, ISingleBlogObject } from '../../types/types';
import { GetBlogBlock } from '../home/home';

function Showlist() {

  const blogType = useParams();
  const [requiredBlogs, setRequiredBlogs] = useState<ISingleBlogObject[]>([]);
  const { data, pending, error } = useFetchData('http://localhost:4000/blogData') as IAllBlogFetch;

  useEffect(() => {
    setRequiredBlogs(data.filter((item) => item.blogType === blogType.type));
  }, [data]);

  return (
    <div className='list-div'>
      <h5> Showing you the results for {blogType.type} blogs</h5>
      {pending ? (<MoonLoader color="#36d7b7" className="home-spinner" />)
        : <>
          {requiredBlogs.length === 0 ? <div className='error-div'>Sorry, We currently have no content on {blogType.type} blogs.</div>
            : requiredBlogs.map((blog) => <GetBlogBlock {...blog} key={blog.id}/>)}
        </>
      }
    </div>
  );
}

export default Showlist;