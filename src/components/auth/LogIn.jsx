import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Admin from "../adminData/Admin";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [adminAccess, setadminAccess] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePass = (event) => {
    setPass(event.target.value);
  };
  const formData = () => {
    if ((email == "") & (pass == "")) {
      console.log("Please enter valid email and pass");
    }
    Admin.adminData.map((items) => {
      if (email == items.email && pass == items.pass) {
        console.log(`Welcome back ${items.name}`);
        setadminAccess(true);
      }
    });

    setEmail("");
    setPass("");
  };

  return (
    <>
      <div className="h-screen w-full bg-purple-100  flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <div>
            <h1 className="text-3xl font-black uppercase">Log In</h1>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                required
                className="login-input px-4 py-2 rounded outline-none font-bold text-sm w-[20rem] text-gray-600 "
                placeholder="Enter your Email Here"
              />
              <input
                type="password"
                required
                value={pass}
                onChange={handlePass}
                className="login-input px-4 py-2 rounded outline-none font-bold text-sm w-[20rem] text-gray-600"
                placeholder="Enter your Password Here"
              />
              <NavLink
                to={adminAccess ? "/" : "/admin"}
                className="btn text-center"
              >
                <button onClick={formData}>Submit</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
