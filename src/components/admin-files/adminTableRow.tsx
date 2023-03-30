import { ISingleBlogObject } from "../../types/types";

export default function AdminTableRow({ id, authorName, heading, blogType }: ISingleBlogObject) {

    function handleDelete(id: number) {
      fetch(`http://localhost:4000/blogData/${id}`, { method: "DELETE" }).then(
        () => {
          alert("one blog deleted successfully...!");
          window.location.reload();
        });
    }
  
    return (
      <tr key={id}>
        <td>{Number(id)}</td>
        <td>{authorName}</td>
        <td>{heading}</td>
        <td>{blogType}</td>
        <td><button onClick={() => handleDelete(Number(id))}>Delete</button>
        </td>
      </tr>
    );
  }