import React, { FormEventHandler, useRef, useState } from "react";
import './varifyAdmin.css';
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

  const [adminDetails, setAdminDetails] = useState({ adminName: "", password: "" });
  const [isRightAdmin, setIsRightAdmin] = useState(false);

  let getAdminDetails = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setAdminDetails({ ...adminDetails, [target.name]: target.value });
  };

  let varifyCredentials = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (adminDetails.adminName === checkName && adminDetails.password === checkPass) {
      setIsRightAdmin(true);
    }
    setAdminDetails({ adminName: "", password: "" });
    showContent();
  };

  const adminVisible = useRef<HTMLDivElement>(null);

  function showContent() {
    adminVisible.current && (adminVisible.current.style.visibility = "visible");
  }

  return (
    <div className="varifyadmin-div">
      <div>
        <h4>Welcome to BlogQuest</h4>
        <img src="https://media.istockphoto.com/id/1426988809/photo/security-password-login-online-concept-hands-typing-and-entering-username-and-password-of.jpg?b=1&s=170667a&w=0&k=20&c=AJD5Wv30lmyILccJyMpQGhkmh0VhZ5WNDtk53MO1OVM=" height='360px' width={530} />
      </div>
      <div className="login-div">
        <h5>Admin Login</h5>
        <form onSubmit={(event) => varifyCredentials(event)}>
          <div>
            <input
              type="text"
              placeholder="Enter name"
              name="adminName"
              autoComplete="off"
              value={adminDetails.adminName}
              onChange={(event) => getAdminDetails(event)}
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
      </div>

      {/* {isRightAdmin? <ReturnPageLink isBoolean={isRightAdmin}/> : ''}  */}
    </div>
  );
}
