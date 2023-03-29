import React from 'react'
import { IShowResult, ISingleBlogObject } from "../../../types/types";
import { GetBlogBlock } from '../Home';

function ShowSearchResult({ searchResult, isAvailable, filteredBlogs }: IShowResult) {
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

export default React.memo(ShowSearchResult)