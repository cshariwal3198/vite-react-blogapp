import React, {useRef} from 'react';
import './CreateBlog.css'

function CreateBlog() {

  const authorName = useRef<HTMLInputElement>(null)

  return (
    <div className='post-blog'>
      <br /><h4> Hello, enjoy your writing.</h4><br />
      <form className='post-form'>
      <div>
          <label htmlFor="author">Name of author :</label>
          <input type="text" name='author' placeholder='Enter name' ref={authorName}/>
        </div>
      <div>
          <label htmlFor="email">Author mail :</label>
          <input type="email" name='email' placeholder='Enter mail'/>
        </div>
        <div>
          <label htmlFor="password">password :  </label>
          <input type="password" name='password' placeholder='Enter a password'/>
        </div>
        <div>
          <label htmlFor="heading">Blog Heading :</label>
          <input type="text" name='heading' placeholder='Enter heading'/>
        </div>
        <div>
          <label htmlFor="heading">Tagline :</label>
          <input type="text" name='tagline' placeholder='Enter a tagline'/>
        </div>
        <div>
        <label htmlFor="picture">Related picture :</label>
          <input type="text" name='picture' placeholder='paste image link address here'/>
        </div>
        <div>
          <label htmlFor="blogContent">Content here : </label>
          <textarea name="blogContent" cols={20} rows={10}/>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default CreateBlog