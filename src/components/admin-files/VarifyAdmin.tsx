import React, { FormEventHandler, useRef, useState } from "react";
import { Link } from "react-router-dom";

// function ReturnPageLink({isBoolean}: {isBoolean:boolean}) {
//   return (
//     <>
//       {isBoolean ? (
//         <div>
//           Click here <Link to="/admin">AdminPage</Link>
//         </div>
//       ) : (
//         "Entered details are wrong...!! Please try again"
//       )}
//     </>
//   );
// }

export default function VarifyAdmin() {
  const checkName = "chetansh";
  const checkPass = "cshariwal";

  const [adminDetails, setAdminDetails] = useState({
    adminName: "",
    password: "",
  });
  const [isRightAdmin, setIsRightAdmin] = useState(false);

  let getAdminDetails = ({ target }:React.ChangeEvent<HTMLInputElement>) => {
    setAdminDetails({ ...adminDetails, [target.name]: target.value });
  };

  let varifyCredentials = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAdminDetails({ adminName: "", password: "" });
    if (
      adminDetails.adminName === checkName &&
      adminDetails.password === checkPass
    ) {
      setIsRightAdmin(true);
    }
    showContent();
  };

  const adminVisible = useRef<HTMLDivElement>(null);

  function showContent() {
    if (adminVisible.current) {
      adminVisible.current.style.visibility = "visible";
    }
  }

  return (
    <div>
      <form onSubmit={(event)=>varifyCredentials(event)}>
        <div>
          <input
            type="text"
            placeholder="Enter name"
            name="adminName"
            autoComplete="off"
            value={adminDetails.adminName}
            onChange={(event)=>getAdminDetails(event)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={adminDetails.password}
            onChange={getAdminDetails}
            autoComplete="off"
          />
        </div>
        <input type="submit" />
      </form>
      <div ref={adminVisible} style={{ visibility: "hidden" }}>
        {isRightAdmin ? (
          <div>
            Click here <Link to="/admin">AdminPage</Link>
          </div>
        ) : (
          "Entered details are wrong...!! Please try again"
        )}
      </div>

      {/* {isRightAdmin? <ReturnPageLink isBoolean={isRightAdmin}/> : ''}  */}
    </div>
  );
}
