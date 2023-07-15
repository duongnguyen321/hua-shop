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

  const fakeLoading = useCallback(async () => {
    setIsLoading(true);
    await setTimeout(() => {
      setIsLoading(false);
    }, 800);
    handleScrollToTop();
  }, []);

  useEffect(() => {
    fakeLoading();
    handleScrollToTop();
  }, [location.pathname]);

  const content = useMemo(() => {
    return isLoading ? <Loading /> : <Main />;
  }, [isLoading]);

  return <>{content}</>;
}

export default Page;
