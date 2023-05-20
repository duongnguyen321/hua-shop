import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Main from "./Main";
import Loading from "../pages/Loading";

function handleScrollToTop() {
  window.scrollTo(0, 0);
}

function Page() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const fakeLoading = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    handleScrollToTop();
  }, []);

  useEffect(() => {
    fakeLoading();
  }, [location.pathname, fakeLoading]);

  const content = useMemo(() => {
    return isLoading ? <Loading /> : <Main />;
  }, [isLoading]);

  return <>{content}</>;
}

export default Page;
