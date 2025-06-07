import React, { useState } from "react";

import { MdDarkMode } from "react-icons/md";

const Darkmode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className="dark-mode text-4xl">
        <div>
          <MdDarkMode onClick={toggleMode} />
        </div>
      </div>
    </>
  );
};

export default Darkmode;
