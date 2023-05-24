import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Common/Header";
import { useThrottle } from "../hooks";
import { showTostMessage } from "../utils/notification";

const Layout = () => {
  const sizeToRange = size => {
    if (size < 600) {
      return "mobile";
    } else if (size > 1200) {
      return "desktop";
    }
    return "tablet";
  };

  const [range, setRange] = useState(sizeToRange(window.innerWidth));

  const handleWindowResize = useThrottle(
    () => {
      setRange(sizeToRange(window.innerWidth));
    },
    1000,
    [],
  );

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    if (window && range && range !== "desktop") {
      showTostMessage("info", `Showing app in ${range} view.`);
    }
  }, [range]);

  return (
    <div>
      <Header range={range} />
      <Outlet />
    </div>
  );
};

export default Layout;
