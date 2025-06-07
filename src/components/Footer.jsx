import React from "react";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer ">
        <div className="flex relative justify-center items-center p-8 ">
          <div className="absolute bottom-2 rounded-xl w-7/12 bg-white p-8 flex justify-between ">
            <h1 className="font-semibold">
              Ready to get started?
              <br />
              Talk to us today
            </h1>
            <button className="shop-btn">GET STARTED</button>
          </div>
        </div>
        <div className="text-gray-200 flex gap-20 justify-center items-center mt-12">
          <div className=" flex flex-col gap-4">
            <h1 className="font-bold">Vaibhav Rajpoot</h1>
            <h1 className="w-72">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
          </div>
          <div className=" ">
            <form action="" method="POST" className="flex flex-col gap-4">
              <h1>
                Subscribe to get important <br /> updates
              </h1>
              <input
                type="email"
                className="required px-4 py-2 w-40 text-black"
                placeholder="enter here"
              />
              <button className="shop-btn w-fit">SUBSCRIBE</button>
            </form>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Follow Us</h1>
            <div className="flex gap-4">
              <FaDiscord className="footer-icons cursor-pointer" />
              <FaGithub className="footer-icons cursor-pointer" />
              <FaInstagram className="footer-icons cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Call Us</h1>
            <h1>+91 1234567890</h1>
          </div>
        </div>
        <hr className=" mt-16" />
        <div className="text-gray-300 pb-12  flex justify-evenly items-center mt-12 ">
          <div>
            <h1>@2022 VaibhavRajpoot. All Rights Reserved</h1>
          </div>
          <div className="items-center ">
            <h1 className="uppercase font-semibold text-sm ">Privacy Policy</h1>
            <h1 className="uppercase font-semibold text-sm">Terms and conditions</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
