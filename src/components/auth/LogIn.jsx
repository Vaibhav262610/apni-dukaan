import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Admin from "../adminData/Admin";
import { useDispatch } from "react-redux";
import { setAdminAccess } from "@/store/userSlice";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook for redirecting

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePass = (event) => {
    setPass(event.target.value);
  };

  const formData = () => {
    let isValid = false;
    let userName = "";

    Admin.adminData.forEach((items) => {
      if (email === items.email) {
        console.log(`Email match found for ${items.name}`);
        isValid = true;
        userName = items.name;
      }
    });

    dispatch(setAdminAccess({ adminAccess: isValid, userName }));

    if (isValid) {
      navigate("/");
    } else {
      navigate("/");
    }

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
              {/* <NavLink to={formData} className="btn text-center"> */}
              <button onClick={formData} className="btn">
                Submit
              </button>
              <NavLink to="/signup">
                <h1 className="font-bold cursor-pointer text-sm text-center">
                  Doesn't have an account? Create New
                </h1>
              </NavLink>
              {/* </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
