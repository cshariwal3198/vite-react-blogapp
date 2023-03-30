import React, { useRef, useState } from 'react';
import './searchBlockInHome.css'
import useFetchData from '../../../../hooks/useFetchData';
import { IAllBlogFetch, ISingleBlogObject } from '../../../types/types';
import ShowSearchResult from './showSearchResult';

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
        <form onSubmit={handleSearch}>
        <input type="text" placeholder="search a topic" value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <hr />

      <ShowSearchResult {...{ filteredBlogs, searchResult, isAvailable }} />
    </div>
  );
}