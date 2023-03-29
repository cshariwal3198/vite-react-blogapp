import React, { useRef, useState } from 'react';
import useFetchData from '../../../hooks/useFetchData';
import { IAllBlogFetch, IShowResult, ISingleBlogObject } from '../../types/types';
import { GetBlogBlock } from './home';

export default function SearchBlockInHome() {

  const [searchInput, setSearchInput] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [filteredBlogs, setFilteredBlogs] = useState<ISingleBlogObject[]>([]);
  const searchResult = useRef<HTMLDivElement>(null);

  const { data } = useFetchData('http://localhost:4000/blogData') as IAllBlogFetch;

  function handleSearch() {
    setFilteredBlogs(data.filter((blog) => (blog.heading.toLowerCase().includes(searchInput.toLowerCase())
      || blog.blogType.toLowerCase().includes(searchInput.toLowerCase()))));
    setIsAvailable(true);
    setSearchInput('');
  }

  return (
    <div>

      <div className="search-Blog">
        <h4>Explore : </h4>
        <input type="text" placeholder="search a topic" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <hr />

      <ShowResult {...{ filteredBlogs, searchResult, isAvailable }} />
    </div>
  );
}

function ShowResult({ searchResult, isAvailable, filteredBlogs }: IShowResult) {
  return (<>
    <div ref={searchResult}>
      {
        isAvailable &&
        <> {filteredBlogs.length ?
          <>
            <h4> Search results : </h4>
            <div> {filteredBlogs.map((blog: ISingleBlogObject) => <GetBlogBlock {...blog} key={blog.id} />)} </div>
          </>
          : <h5> Sorry, No content available on searched topic</h5>}
        </>
      }
    </div>
  </>);
}