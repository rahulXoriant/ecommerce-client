import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "../components/Header";
import { useThrottle } from "../hooks";

const Layout = () => {


  const sizeToRange = (size) => {
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
      // Execute some expensive operation
      setRange(sizeToRange(window.innerWidth));
    },
    1000,
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    if (range) {
      toast.info(`Showing app in ${range} view.`, {
        position: "top-right"
      });
    }
  }, [range])

  return (
    <div>
      <Header />
      <div>Screen size (resize to see): {range}</div>
      <Outlet />
    </div>
  );
};

export default Layout;
