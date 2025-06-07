import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" pt-40 gap-12 flex justify-center items-center flex-col main-contact">
        <h1 className="text-3xl font-semibold">Feel Free To Contact Us</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7047.4347509001445!2d79.74474641614678!3d27.971940546422015!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719314108370!5m2!1sen!2sin"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen=""
          className="google-map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div>
          <div className="pb-12">
            <form
              action="https://formspree.io/f/mldrrolg"
              method="POST"
              className=" contact-form flex flex-col gap-8"
            >
              <input
                className="uppercase text-sm contact-input p-4 w-96"
                type="text"
                placeholder="Username"
                name="Username"
                required
                autoComplete="off"
              />
              <input
                className="text-sm contact-input p-4 w-96"
                type="email"
                name="Email"
                required
                autoComplete="off"
                placeholder="EMAIL"
              />
              <textarea
                className="uppercase text-sm contact-input p-4 w-96"
                name="Message"
                placeholder="Enter Your Message"
                cols="30"
                rows="10"
                required
                autoComplete="off"
              ></textarea>
              <input
                className="cursor-pointer contact-btn font-semibold"
                type="submit"
                value="SEND"
              />
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;


