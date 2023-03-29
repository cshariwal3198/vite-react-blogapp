import React, { useRef } from "react";
import "./createBlog.css";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();

  const authorName = useRef<HTMLInputElement>(null);
  const authorMail = useRef<HTMLInputElement>(null);
  const authorPassword = useRef<HTMLInputElement>(null);
  const heading = useRef<HTMLInputElement>(null);
  const blogPic = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);
  const publishDate = useRef<HTMLInputElement>(null);
  const blogType = useRef<HTMLSelectElement>(null)

  function createNewBlog(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newBlogObject = {                    // ISingleBlogObject has to be applied here.
      authorName: authorName.current?.value,
      email: authorMail.current?.value,
      password: authorPassword.current?.value,
      heading: heading.current?.value,
      picture: blogPic.current?.value,
      content: content.current?.value,
      publishedOn: publishDate.current?.value,
      blogType: blogType.current?.value
    };

    fetch("http://localhost:4000/blogData", {
      method: "POST",
      body: JSON.stringify(newBlogObject),
      headers: { "Content-Type": "application/json" },
    }).then(() => { alert("Thank you. Your new blog has been posted successfully :)"), navigate("/") });
  }

  return (
    <div className="post-blog">
      <br />
      <h4> Hello</h4>
      <br />
      <form className="post-form" onSubmit={(event) => createNewBlog(event)}>
        <div>
          <label htmlFor="author">Name of author : </label>
          <input
            type="text"
            name="author"
            placeholder="Enter name"
            ref={authorName}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email">Author mail : </label>
          <input
            type="email"
            name="email"
            placeholder="Enter mail"
            ref={authorMail}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="password">password : </label>
          <input
            type="password"
            name="password"
            placeholder="Enter a password"
            ref={authorPassword}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="heading">Blog Heading : </label>
          <input
            type="text"
            name="heading"
            placeholder="Enter heading"
            ref={heading}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="type">Blog type : </label>
          <select name="type" className="blog-type" ref={blogType}>
            <option value="option">Select type of your blog</option>
            <option value="Technology">Technology</option>
            <option value="Science">Science</option>
            <option value="International">International</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Cultural">Cultural</option>
            <option value="History">History</option>
            <option value="Political">Political</option>
            <option value="General">General</option>
          </select>
        </div>
        <div>
          <label htmlFor="picture">Related picture : </label>
          <input
            type="text"
            name="picture"
            placeholder="paste image link address here"
            ref={blogPic}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="publishDate">Published on : </label>
          <input
            type="date"
            name="publishDate"
            ref={publishDate}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="blogContent">Content here : </label>
          <textarea
            name="blogContent"
            cols={20}
            rows={10}
            ref={content}
            required
            autoComplete="off"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CreateBlog;
