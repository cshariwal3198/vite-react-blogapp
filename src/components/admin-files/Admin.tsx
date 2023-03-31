import React from "react";
import { ColorRing } from "react-loader-spinner";
import "./admin.css";
import useFetchData from "../../../hooks/useFetchData";
import { IAllBlogFetch, ISingleBlogObject } from "../../types/types";
import AdminTableRow from "./adminTableRow";
import TableHeader from "./tableHeader";

export default function Admin() {
  const { data, pending, error } = useFetchData("http://localhost:4000/blogData") as IAllBlogFetch;

  return (
    <div>
      <h3 className="welcome">Welcome Admin </h3>
      {data ? (
        <table className="admin-table" style={{ border: "1px solid black" }}>
          <TableHeader />
          <tbody>
            {pending ? (
              <div className="loader">
                <ColorRing visible={true} height="100" width="100" ariaLabel="blocks-loading"
                  wrapperClass="blocks-wrapper"
                  colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]} />
              </div>
            ) : (data.map(({ id, authorName, heading, blogType }: ISingleBlogObject) => {
              return <AdminTableRow {...{ id, authorName, heading, blogType }} key={id} />;
            })
            )}
          </tbody>

        </table>
      ) : ''}
    </div>
  );
}