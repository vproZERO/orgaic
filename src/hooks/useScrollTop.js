import React from "react";
import { useLocation } from "react-router-dom";
const useScrollTop = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
};

export default useScrollTop;
