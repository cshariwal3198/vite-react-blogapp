import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import useFetchData from '../../../hooks/useFetchData';
import { IAllBlogFetch, ISingleBlogObject } from '../../types';
import { GetBlogBlock } from '../home/home';

function Showlist() {

  const blogType = useParams();
  const { data, pending, error } = useFetchData('http://localhost:4000/blogData') as IAllBlogFetch;

  const [requiredBlogs, setRequiredBlogs] = useState<ISingleBlogObject[]>([]);

  useEffect(() => {
    setRequiredBlogs(data.filter((blog) => { blog.blogType === blogType.type }));
  }, [pending]);

  return (
    <div>
      <h5> Showing you the results for {blogType.type} blogs</h5>
      {
        pending ? (<MoonLoader color="#36d7b7" className="home-spinner" />)
          : <>
            {JSON.stringify(requiredBlogs)}
          </>
      }
    </div>
  );
}

export default Showlist;