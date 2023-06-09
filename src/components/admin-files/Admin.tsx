import React from "react";
import { ColorRing } from "react-loader-spinner";
import "./admin.css";
import UseFetchData from "../useFetchData";
import { IAllBlogFetch, ISingleBlogObject } from "../../types";

export default function Admin() {
  const { data, pending, error } = UseFetchData("http://localhost:4000/blogData") as IAllBlogFetch;

  function handleDelete(id: number) {
    fetch(`http://localhost:4000/blogData/${id}`, { method: "DELETE" }).then(
      () => {
        alert("one blog deleted successfully...!");
        window.location.reload();
      }
    );
  }

  return (
    <div>
      <h3 className="welcome">Welcome Admin</h3>
      {data ? (
        <table
          className="admin-table"
          border={1}
          style={{ border: "1px solid black" }}
        >
          <thead>
            <th>Sl No</th>
            <th>Author name</th>
            <th>About</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {pending ? (
              <div className="loader">
                <ColorRing
                  visible={true}
                  height="100"
                  width="100"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            ) : (
              data.map((singleBlog: ISingleBlogObject) => {
                return (
                  <tr key={singleBlog.id}>
                    <td>{Number(singleBlog.id) + 1}</td>
                    <td>{singleBlog.authorName}</td>
                    <td>{singleBlog.heading}</td>
                    <td><button onClick={() => handleDelete(Number(singleBlog.id))}>Delete</button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
}
