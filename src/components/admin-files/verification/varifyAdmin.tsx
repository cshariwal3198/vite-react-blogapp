import React, { useRef, useState } from "react";
import './varifyAdmin.css';
import { Link } from "react-router-dom";
import LoginForm from "./loginForm";
import ReturnPageLink from "./returnPageLink";

export default function VarifyAdmin() {
  const checkMail = "csh@gmail.com";
  const checkPass = "cshariwal";

  const [isRightAdmin, setIsRightAdmin] = useState(false);

  const varifyCredentials = (adminDetails: any) => {
    console.log(adminDetails)
    if (adminDetails.email === checkMail && adminDetails.password === checkPass) {
      setIsRightAdmin(true);
    }
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
        <LoginForm account="Admin" varifyCredentials={varifyCredentials} />

        <div ref={adminVisible} style={{ visibility: "hidden" }}>
          <ReturnPageLink isBooleanValue={isRightAdmin} path={'/admin'} pageAddress={'AdminPage'} />
        </div>
      </div>
    </div>
  );
}
