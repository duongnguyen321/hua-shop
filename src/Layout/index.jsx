import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Main from "./Main";
function handleScrollToTop() {
  window.scrollTo(0, 0);
}
function Page() {
  const location = useLocation();
  useEffect(() => {
    handleScrollToTop();
  }, [location]);
  return <Main />;
}
export default Page;
